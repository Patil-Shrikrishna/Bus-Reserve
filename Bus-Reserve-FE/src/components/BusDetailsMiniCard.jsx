import React from "react";
import Rating from "../components/Rating";
import Heading from "../components/Heading";

const BusDetailsMiniCard = () => {
  return (
    <div className="flex justify-center w-full border border-custom-darkgray rounded-lg">
      <div className="flex flex-col p-4 gap-2 xl:justify-between">
        {/* Line 1 */}
        <div className="flex gap-4 items-center">
          <Heading
            heading="Intercity Smart Bus"
            className="text-sm md:text-md lg:text-lg xl:text-2xl xxl:text-3xl font-bold "
          />
          <Rating rating="4.5" />
          <Heading
            heading="Ratings"
            className="text-xs md:text-sm lg:text-md xl:text-lg xxl:text-xl text-custom-darkgray font-bold "
          />
        </div>
        {/* Line 2 */}
        <div className="flex gap-4 font-extrabold">
          <Heading
            heading="A/C Sleeper (2+1)"
            className="text-xs lg:text-md xl:text-xl xxl:text-xl font-bold "
          />
          |
          <Heading
            heading="24 Seats Left"
            className="text-xs lg:text-md xl:text-xl xxl:text-xl font-bold "
          />
          |
          <Heading
            heading="12 Window's Left"
            className="text-xs lg:text-md xl:text-xl xxl:text-xl font-bold"
          />
        </div>
        {/* Line 3 */}
        <div className="flex gap-4 items-center">
          <Heading
            heading="07:00, 21 Nov"
            className="text-xs lg:text-md xl:text-lg xxl:text-3xl font-bold"
          />
          <div className="border border-custom-darkgray w-6 lg:w-10 xl:w-16 xxl:w-20 h-0"></div>
          <Heading
            heading="07 hrs 59 min"
            className="text-xs lg:text-md xl:text-lg xxl:text-3xl font-bold text-custom-darkgray"
          />
          <div className="border border-custom-darkgray w-6 lg:w-10 xl:w-16 xxl:w-20 h-0"></div>
          <Heading
            heading="15:00, 21 Nov"
            className="text-xs lg:text-md xl:text-lg xxl:text-3xl  font-bold"
          />
        </div>
        {/* Line 4 */}
        <div className="text-custom-blue flex gap-1 items-center mt-4">
          <Heading
            heading="Live Tracking"
            className="text-xs lg:text-md xl:text-lg xxl:text-xl font-bold"
          />
          |
          <Heading
            heading="Policies"
            className="text-xs lg:text-md xl:text-lg xxl:text-xl font-bold"
          />
          |
          <Heading
            heading="Photos"
            className="text-xs lg:text-md xl:text-lg xxl:text-xl font-bold"
          />
          |
          <Heading
            heading="Amenities"
            className="text-xs lg:text-md xl:text-lg xxl:text-xl font-bold"
          />
          |
          <Heading
            heading="Reviews"
            className="text-xs lg:text-md xl:text-lg font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default BusDetailsMiniCard;
