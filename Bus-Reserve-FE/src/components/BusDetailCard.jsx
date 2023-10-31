import React from "react";
import Heading from "./Heading";
import Rating from "./Rating";
import Button from "./Button";

const BusDetailCard = () => {
  return (
    <div className="flex border border-custom-darkgray rounded-lg w-fit ">
      <div className="flex flex-col p-4 gap-2 justify-between">
        {/* Line 1 */}
        <div className="flex gap-4 items-center">
          <Heading
            heading="Intercity Smart Bus"
            className="text-3xl font-bold "
          />
          <Rating rating="4.5" />
          <Heading
            heading="Ratings"
            className="text-xl text-custom-darkgray font-bold "
          />
        </div>
        {/* Line 2 */}
        <div className="flex gap-4 font-extrabold">
          <Heading heading="A/C Sleeper (2+1)" className="text-lg font-bold " />
          |
          <Heading heading="24Seats Left" className="text-lg font-bold " />|
          <Heading heading="12 Window's Left" className="text-lg font-bold" />
        </div>
        {/* Line 3 */}
        <div className="flex gap-4 items-center">
          <Heading heading="07:00, 21 Nov" className="text-3xl font-bold" />
          <div className="border border-custom-darkgray w-20 h-0"></div>
          <Heading
            heading="07 hrs 59 min"
            className="text-xl font-bold text-custom-darkgray"
          />
          <div className="border border-custom-darkgray w-20 h-0"></div>
          <Heading heading="15:00, 21 Nov" className="text-3xl font-bold" />
        </div>
        {/* Line 4 */}
        <div className="text-custom-blue flex gap-6 mt-4">
          <Heading heading="Live Tracking" className="text-sm font-bold" />
          <Heading heading="Policies" className="text-sm font-bold" />
          <Heading heading="Photos" className="text-sm font-bold" />
          <Heading heading="Amenities" className="text-sm font-bold" />
          <Heading heading="Reviews" className="text-sm font-bold" />
        </div>
      </div>
      <div className="border border-custom-darkgray "></div>
      <div className="flex flex-col items-center justify-between p-4">
        <Heading heading="Trip Cost" className="text-2xl font-bold" />
        <Heading heading="Starting from" className="text-md font-bold mt-4" />
        <Heading heading="₹ 899" className="text-4xl font-bold" />
        <Button name="View Seat" className="text-2xl font-bold  mt-4" />
      </div>
    </div>
  );
};

export default BusDetailCard;
