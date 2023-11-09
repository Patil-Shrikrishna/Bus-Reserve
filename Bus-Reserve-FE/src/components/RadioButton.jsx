import React from "react";

const RadioButton = (props) => {
  const handleToggle = (event) => {
    if (props.select) {
      props.select(props.name, event.target.value);
    }
  };

  return (
    <div className={props.className}>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.label}
        className="w-4 h-4"
        onChange={handleToggle}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};
export default RadioButton;
