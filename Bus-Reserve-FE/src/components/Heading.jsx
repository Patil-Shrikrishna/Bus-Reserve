import React from "react";

const Heading = (props) => {
  return (
    <p className={`h-fit w-fit ${props.className && props.className}`}>
      {props.heading}
    </p>
  );
};
export default Heading;
