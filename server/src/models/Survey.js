const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: number, default: 0 },
  no: { type: number, default: 0 }
});

mongoose.model('surveys', surveySchema);