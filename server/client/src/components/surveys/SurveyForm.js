// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyField from './SurveyField';
import { FormGroup, Form, Col, Button, ControlLabel, FormControl } from 'react-bootstrap';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient Lidt', name: 'emails' },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, text }) => {
      return (
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              {label}
            </Col>
            <Col sm={8}>
              <FormControl type={text} />
            </Col>
          </FormGroup>
        </Form>
      );
    });
  }

  render() {
    return (
      <Form horizontal>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                  Submit
              </Button>
            </Col>
          </FormGroup>
        </form>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
