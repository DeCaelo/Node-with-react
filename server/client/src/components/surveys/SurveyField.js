// SurveyField contains logic to render a single label & text input
import React from 'react';

export default ({ input, label }) => {
  return (
    <form>
      <div className="form-group">
        <label className="col-sm-2 control-label">
          {label}
        </label>
        <div className="col-sm-7">
          <input {...input} />
        </div>
      </div>
    </form>
  );
};
