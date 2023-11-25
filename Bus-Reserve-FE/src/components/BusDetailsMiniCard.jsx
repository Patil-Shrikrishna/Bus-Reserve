import React from "react";
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import moment from "moment-timezone";

const BusDetailsMiniCard = (props) => {
  const {
    busAmenities,
    busName,
    busRating,
    totalSeats,
    endTime,
    seatBooked,
    startTime,
  } = props.data;

  const convertTime = (timeString) => {
    const utcDate = moment.utc(timeString);
    return `${moment(utcDate).format("HH:mm")}, ${moment(utcDate).format(
      "DD MMM"
    )}`;
  };

  const calculateDuration = (start, end) => {
    const time1 = new Date(start);
    const time2 = new Date(end);

    const timeDifferenceInMilliseconds = Math.abs(
      time2.getTime() - time1.getTime()
    );

    const hours = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifferenceInMilliseconds / (1000 * 60)) % 60
    );
    return `${hours} hours ${minutes} min`;
  };
  return (
    <div className="flex justify-center w-full border border-custom-darkgray rounded-lg">
      <div className="flex flex-col p-4 gap-2 xl:justify-between">
        {/* Line 1 */}
        <div className="flex gap-4 items-center">
          <Heading
            heading={busName}
            className="text-sm md:text-md lg:text-lg xl:text-2xl xxl:text-3xl font-bold "
          />
          <Rating rating={busRating} />
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
            heading={`${totalSeats - seatBooked.length} Seats Left`}
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
            heading={convertTime(startTime)}
            className="text-xs lg:text-md xl:text-lg xxl:text-3xl font-bold"
          />
          <div className="border border-custom-darkgray w-6 lg:w-10 xl:w-16 xxl:w-20 h-0"></div>
          <Heading
            heading={calculateDuration(startTime, endTime)}
            className="text-xs lg:text-md xl:text-lg xxl:text-3xl font-bold text-custom-darkgray"
          />
          <div className="border border-custom-darkgray w-6 lg:w-10 xl:w-16 xxl:w-20 h-0"></div>
          <Heading
            heading={convertTime(endTime)}
            className="text-xs lg:text-md xl:text-lg xxl:text-3xl  font-bold"
          />
        </div>
        {/* Line 4 */}
        <div className="text-custom-blue flex gap-4 items-center mt-4">
          {busAmenities.map((item, index) => (
            <Heading
              key={index}
              heading={item}
              className="text-xs lg:text-md xl:text-lg xxl:text-xl font-bold"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusDetailsMiniCard;
