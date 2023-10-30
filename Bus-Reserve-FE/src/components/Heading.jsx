import React from "react";

const Heading = (props) => {
  return (
    <p
      className={`text-black font-bold h-fit ${
        props.primary ? "text-2xl" : "text-xl"
      }`}
    >
      {props.heading}
    </p>
  );
};
export default Heading;
