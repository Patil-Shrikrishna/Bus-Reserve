import React from "react";

const RadioButton = (props) => {
  return (
    <label className={props.className}>
      <input type="radio" value={props.label} />
      {props.label}
    </label>
  );
};

export default RadioButton;
