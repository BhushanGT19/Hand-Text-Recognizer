import React, { useState } from "react";
import Kb from "./Kb";
const Textarea = (props) => {
  return (
    <div className="form-group">
      <Kb text={props.text} />
    </div>
  );
};

export default Textarea;
