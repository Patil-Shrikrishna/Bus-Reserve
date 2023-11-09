import React, { useState } from "react";
import Heading from "./Heading";
import Rating from "./Rating";
import Button from "./Button";
import RadioButton from "./RadioButton";
import { BsSquare } from "react-icons/bs";
import SeatLayout from "./SeatLayout";

const BusDetailCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col border border-custom-darkgray rounded-lg w-full ">
      <div className="flex w-full ">
        <div className="flex w-4/6 flex-col p-4 gap-2 xl:justify-between">
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
        {/* <div className="border border-custom-darkgray "></div> */}
        <div className="flex w-2/6 flex-col items-center justify-between p-4 border-l-2 border-custom-darkgray">
          <Heading
            heading="Trip Cost"
            className="text-sm md:text-md lg:text-lg xl:text-3xl font-bold"
          />
          <Heading
            heading="Starting from"
            className="text-sm md:text-md lg:text-lg xl:text-lg font-bold mt-4"
          />
          <Heading
            heading="₹ 899"
            className="text-sm md:text-md lg:text-lg xl:text-3xl font-bold"
          />
          <Button
            name="View Seat"
            className="text-xs md:text-md xl:text-lg font-bold mt-4"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {/* Section 2 : Collapsible content */}
      <div
        className={`border-t border-custom-darkgray p-4 flex-col gap-4 ${
          isOpen ? "flex" : "hidden"
        }`}
        id={`collapsibleContent${props.id}`}
      >
        {/* Line 1: */}
        <Heading heading="Select Seats" className="text-lg font-bold" />
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Line 2: */}
          <div className="flex gap-2">
            {/* column 1 */}
            <div className="flex gap-2">
              <Heading heading="Seat Price :" className="text-sm" />
              {["All", 689, 899, 1199, 1599].map((item) => {
                return (
                  <div
                    key={item}
                    className="flex px-2 py-1 h-fit border shadow-[0_0px_3px_0px_rgba(0,0,0,0.3)] w-fit "
                  >
                    <RadioButton
                      label={item}
                      name="priceGroup"
                      id={`price-${item}`}
                      className="flex gap-2 w-fit text-xs items-center justify-center"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* column 2 */}
          <div className="flex sm:flex-col gap-4 sm:gap-1">
            <label className="flex items-center gap-2 text-sm">
              <BsSquare />
              Vacant Seats
            </label>
            <label className="flex items-center gap-2 text-sm">
              <BsSquare className="bg-custom-darkgray" />
              Reserved Seats
            </label>
            <label className="flex items-center gap-2 text-sm">
              <BsSquare className="bg-custom-blue" />
              Selected Seats
            </label>
          </div>
        </div>

        {/* Bus seat layout code starts here */}
        <div className="flex gap-2 sm:flex-row flex-col ">
          <div className="flex sm:flex-col w-full sm:w-2/3 h-fit gap-6 justify-center items-center border border-custom-darkgray p-6 sm:p-0">
            <div className="flex gap-2 w-fit sm:-rotate-90 -my-24 sm:-my-32">
              <SeatLayout berth="Upper Berth" />
            </div>
            <div className="flex gap-2 w-fit sm:-rotate-90 sm:-my-32">
              <SeatLayout berth="Lower Berth" />
            </div>
          </div>
          {/* column 2 */}
          <div className="flex md:flex-col justify-between border border-custom-darkgray p-4 w-full gap-6 sm:w-1/3">
            <div className="sm:flex sm:flex-col w-full">
              {/* Line 1  */}
              <Heading
                heading="Boarding & Dropping"
                className="text-lg sm:text-2xl font-bold"
              />
              {/* Line 2  */}
              <div className="flex flex-col">
                <div className="flex justify-between">
                  {/* Line 1  */}
                  <Heading
                    heading="Ahmedabad"
                    className="text-md font-semibold"
                  />
                  {/* Line 1  */}
                  <Heading heading="07:00" className="text-md font-semibold" />
                </div>
                <div className="flex justify-between">
                  {/* Line 1  */}
                  <Heading heading="Delhi" className="text-md font-semibold" />
                  {/* Line 1  */}
                  <Heading heading="15:00" className="text-md font-semibold" />
                </div>
              </div>

              {/* Line 3  */}
              <div className="flex justify-between border-y border-custom-darkgray">
                <Heading heading="Seat Number:" className="text-lg font-bold" />
                <Heading heading="L01, L02" className="text-lg font-bold" />
              </div>
            </div>
            <div className="sm:flex sm:flex-col w-full">
              {/* Line 4  */}
              <Heading
                heading="Fare Details"
                className="text-lg sm:text-2xl font-bold"
              />
              {/* Line 5  */}
              <div className="flex justify-between">
                <Heading heading="Amount" className="text-md font-semibold" />
                <Heading
                  heading="INR: 1798"
                  className="text-md font-semibold"
                />
              </div>
              <Button
                name="Proceed To Book"
                className="text-sm xl:text-lg font-bold mt-4 w-full"
                onClick={(e) => handleClick(e)}
                id={`toggleButton${props.id}`}
              />
            </div>
          </div>
        </div>
        {/* Bus seat layout code ends here */}
      </div>
    </div>
  );
};

export default BusDetailCard;
