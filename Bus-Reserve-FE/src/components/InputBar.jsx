import React from "react";

const InputBar = (props) => {
  return (
    <div
      className={`${
        props.className && props.className
      } border-2 border-gray-300 p-2 rounded-lg`}
    >
      <input
        placeholder={props.name}
        className={`${
          props.type === "search" && "bg-custom-bg-seach bg-no-repeat pl-10"
        } w-full text-xl focus:outline-none`}
      />
    </div>
  );
};

export default InputBar;
