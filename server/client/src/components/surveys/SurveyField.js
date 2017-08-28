// SurveyField contains logic to render a single lable & text input
import React from 'react';

export default ({ input, label }) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <input {...input} />
    </div>
  );
};
