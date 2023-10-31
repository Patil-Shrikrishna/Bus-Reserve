import React from "react";
const Dropdown = (props) => {
  const list = props.list.map((item) => {
    return <option value={item}>{item}</option>;
  });
  return (
    <div className="w-fit flex items-center justify-center">
      {props.label && <label for={props.label}>{props.label} : </label>}
      <select
        name={props.label}
        id={props.label}
        className="focus:outline-none border rounded-md"
      >
        {list}
      </select>
    </div>
  );
};
export default Dropdown;
