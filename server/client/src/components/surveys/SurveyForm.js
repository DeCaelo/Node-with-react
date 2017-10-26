// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' },
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
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        {this.renderFields()}
        <div className="form-group">
          <div className="form-group">
            <div className='col-sm-2'>
              <Link to="/surveys" className="btn btn-danger">
                Cancel
              </Link>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-2 col-sm-offset-2">
            <button type="submit">
              Next
              <i className="glyphicon glyphicon-chevron-right" />
            </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
