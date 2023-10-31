import React from "react";

const RadioButton = (props) => {
  return (
    <label>
      <input type="radio" value={props.label} />
      {props.label}
    </label>
  );
};

export default RadioButton;
