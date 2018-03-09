const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const events = _.map(req.body, ({ email, url }) => {
      // Extract the path from the URL
      const pathname = new URL(url).pathname;
      // Extract the survey ID and the 'choice yes or no
      const p = new Path('/api/surveys/:surveyId/:choice');
      // console.log(p.test(pathname)); { surveyId: '5aa296cc2667785e283d0c16', choice: 'yes' }
      const match = p.test(pathname);
      if (match) {
        return {
          email,
          surveyId: match.surveyId,
          choice: match.choice,
        };
      }
    });

    console.log(events); // [ { email: 'ludo.mentalworks@gmail.com',surveyId: '5aa296cc2667785e283d0c16',choice: 'yes' } ]
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // Great place to send an email!
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      // update number of credit
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
