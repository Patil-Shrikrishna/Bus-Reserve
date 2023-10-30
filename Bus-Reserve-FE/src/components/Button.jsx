import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-custom-orange py-1 px-8 w-fit text-white font-semibold text-lg rounded-md"
    >
      {props.name}
    </button>
  );
};

export default Button;
