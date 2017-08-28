// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          label="Survey Title"
          type="text"
          name="title"
          component={SurveyField}
        />
        <Field
          label="Subject Line"
          type="text"
          name="subject"
          component={SurveyField}
        />
        <Field
          label="Email body"
          type="text"
          name="body"
          component={SurveyField}
        />
        <Field
          label="Recipient list"
          type="text"
          name="emails"
          component={SurveyField}
        />
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        {this.renderFields()}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
