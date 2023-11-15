import React from "react";

const Heading = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.heading);
    }
  };
  return (
    <p
      className={`h-fit w-fit ${props.className && props.className}`}
      onClick={handleClick}
    >
      {props.heading}
    </p>
  );
};
export default Heading;
