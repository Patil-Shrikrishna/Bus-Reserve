import React from "react";
import { GoStar } from "react-icons/go";

const Rating = (props) => {
  return (
    <div className="flex justify-center items-center gap-2 bg-custom-green text-white text-lg font-semibold rounded-lg w-fit py-1 px-4">
      <GoStar size={24} />
      {props.rating}
    </div>
  );
};

export default Rating;
