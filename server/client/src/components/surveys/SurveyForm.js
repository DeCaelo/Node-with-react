// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title',
    noValueError: 'You must provide a survey title',
  },
  {
    label: 'Subject Line',
    name: 'subject',
    noValueError: 'You must provide a survey subject',
  },
  {
    label: 'Email Body',
    name: 'body',
    noValueError: 'You must provide a survey body',
  },
  {
    label: 'Recipient List',
    name: 'emails',
    noValueError: 'You must provide a correct email',
  },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, text, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type={text}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <form
        className="container"
        style={{ marginTop: '100px' }}
        onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {this.renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);
