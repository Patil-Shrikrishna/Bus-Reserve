import React from "react";
const Dropdown = (props) => {
  const list = props.list.map((item) => {
    return <option value={item}>{item}</option>;
  });
  return (
    <div>
      {props.label && <label for={props.label}>{props.label} : </label>}
      <select name={props.label} id={props.label}>
        {list}
      </select>
    </div>
  );
};
export default Dropdown;
