import React, { useState, useEffect } from "react";

const CheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
    if (props.select) {
      props.select(props.name, event.target.value, event.target.checked);
    }
  };
  return (
    <label className={props.className}>
      <input
        type="checkbox"
        value={props.label}
        className="w-4 h-4"
        checked={isChecked}
        onChange={handleToggle}
      />
      {props.label}
    </label>
  );
};

export default CheckBox;
