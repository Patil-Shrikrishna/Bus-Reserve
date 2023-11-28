import React from "react";

const Seat = (props) => {
  const handleClick = () => {
    props.onClick(props.seat);
  };

  return (
    <button value={props.seat} onClick={handleClick} disabled={props.disabled}>
      <img src={props.img} className={`flex w-4 h-8 sm:w-6 sm:h-12 `} />
    </button>
  );
};

export default Seat;
