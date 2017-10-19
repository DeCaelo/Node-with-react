// SurveyField contains logic to render a single label & text input
import React from 'react';
import {
  FormGroup,
  Form,
  Col,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

export default ({ input, label }) => {
  return (
    <FormControl>
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            {label}
          </Col>
          <Col sm={7}>
            <input {...input} />
          </Col>
        </FormGroup>
      </Form>
    </FormControl>
  );
};
