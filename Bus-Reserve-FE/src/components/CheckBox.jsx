import React from "react";

const CheckBox = (props) => {
  return (
    <label>
      <input type="checkbox" value={props.label} />
      {props.label}
    </label>
  );
};

export default CheckBox;
