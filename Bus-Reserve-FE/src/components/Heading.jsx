import React from "react";

const Heading = (props) => {
  return (
    <p
      className={`text-black font-bold h-fit w-fit ${
        props.primary ? "text-2xl" : "text-xl"
      } ${props.className && props.className}`}
    >
      {props.heading}
    </p>
  );
};
export default Heading;
