// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import { FormGroup, Col, Button } from 'react-bootstrap';

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
        <FormGroup>
          <Col smOffset={2} sm={4}>
            <Link to="/surveys" className="btn btn-danger">
              Cancel
            </Link>
          </Col>
          <Col smOffset={2} sm={4}>
            <Button type="submit">
              Next
              <i className="glyphicon glyphicon-chevron-right" />
            </Button>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
