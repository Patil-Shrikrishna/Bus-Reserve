import React from "react";

const InputBar = (props) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    props.onClick(name, value);
  };
  return (
    <div
      className={`${
        props.className && props.className
      } border-2 border-gray-300 p-2 rounded-lg`}
    >
      <input
        placeholder={props.name}
        name={props.name}
        className={`${
          props.type === "search" && "bg-custom-bg-seach bg-no-repeat pl-10"
        } w-full text-xl focus:outline-none`}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default InputBar;
