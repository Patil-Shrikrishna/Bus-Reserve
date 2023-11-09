import React from "react";
import { GoStar } from "react-icons/go";

const Rating = (props) => {
  return (
    <div className="flex justify-center items-center gap-1 bg-custom-green text-white text-sm font-semibold rounded-lg w-fit px-2">
      <GoStar size={16} />
      {props.rating}
    </div>
  );
};

export default Rating;
