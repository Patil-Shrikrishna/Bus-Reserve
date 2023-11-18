import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BusDetailCard from "../components/BusDetailCard";
import DateSelector from "../components/DateSelector";
import Heading from "../components/Heading";
import CheckBox from "../components/CheckBox";
import RadioButton from "../components/RadioButton";
import { useSelector } from "react-redux";

const AvailableBus = () => {
  const [filterObject, setFilterObject] = useState({
    arrivalTime: [],
    departureTime: [],
    PickupPoint: "",
    DropPoint: "",
    busRating: [],
    busOperator: [],
  });

  const pickupDropFilter = ["pune", "Delhi", "Ahmedabad"];
  const arrivalDepartureSessionFilter = [
    "Morning Session",
    "Afternoon Session",
    "Evening Session",
  ];
  const ratingFilter = ["4 Star or more", "3 Star or more", "0-2 Star"];
  const busOperatorFilter = [
    "Tata Motors",
    "Eicher Motors",
    "Intercity Smart Bus",
  ];

  const handleClearAll = () => {};

  // For the handleRadioChange function
  const handleRadioChange = (name, value) => {
    setFilterObject((prevState) => ({
      ...prevState,
      [name]: prevState[name] === value ? undefined : value,
    }));
  };

  // For the handleCheckboxChange function
  const handleCheckboxChange = (name, value, checked) => {
    setFilterObject((prevState) => ({
      ...prevState,
      [name]: checked
        ? [...(prevState[name] || []), value]
        : prevState[name]?.filter((item) => item !== value),
    }));
  };
  const journeyData = useSelector((state) => state.updateJourney);
  console.log("journeyData: ", journeyData);
  console.log("filterObject", filterObject);

  return (
    <div>
      {/* Section 1: Navbar */}
      <Navbar />
      {/* Section 2: Main content */}
      <div className="flex gap-4 justify-center m-10 xl:my-10 xl:m-0 ">
        {/* Section 2.1 : Filter */}
        <div className="flex flex-col w-1/6 md:w-1/6 xxl:w-1/6 gap-4 h-screen ">
          <div className="flex w-full items-baseline justify-between border border-custom-darkgray rounded-md py-4 px-4">
            <Heading
              heading="Filter"
              className="font-bold text-xs sm:text-2xl"
            />
            <button onClick={handleClearAll}>
              <Heading
                heading="Clear All"
                className="font-bold text-xs sm:text-lg"
              />
            </button>
          </div>
          <div className="flex flex-col w-full overflow-scroll no-scrollbar border border-custom-darkgray rounded-md px-4">
            <div className="flex flex-col border-b border-custom-darkgray py-2">
              <Heading
                heading="Departure Time"
                className="font-bold text-sm sm:text-2xl"
              />
              {arrivalDepartureSessionFilter.map((item) => (
                <CheckBox
                  select={handleCheckboxChange}
                  name="arrivalTime"
                  key={item}
                  // isChecked={filterObject.arrivalTime.includes(item)}
                  label={item}
                  className="text-xs sm:text-lg font-semibold flex items-center gap-2"
                />
              ))}
            </div>
            <div className=" flex flex-col border-b border-custom-darkgray py-2">
              <Heading
                heading="Arrival Time"
                className="font-bold text-sm sm:text-2xl"
              />
              {arrivalDepartureSessionFilter.map((item) => (
                <CheckBox
                  select={handleCheckboxChange}
                  name="departureTime"
                  key={item}
                  // isChecked={filterObject.departureTime.includes(item)}
                  label={item}
                  className="text-xs sm:text-lg font-semibold flex items-center gap-2"
                />
              ))}
            </div>
            <div className=" flex flex-col border-b border-custom-darkgray py-2">
              <Heading
                heading="Pickup Point"
                className="font-bold text-sm sm:text-2xl"
              />
              {pickupDropFilter.map((item) => (
                <RadioButton
                  key={item}
                  label={item}
                  select={handleRadioChange}
                  name="PickupPoint"
                  id={`pickup-${item}`}
                  className="text-xs sm:text-lg font-semibold flex items-center gap-2"
                />
              ))}
            </div>
            <div className=" flex flex-col border-b border-custom-darkgray py-2">
              <Heading
                heading="Drop Point"
                className="font-bold text-sm sm:text-2xl"
              />
              {pickupDropFilter.map((item) => (
                <RadioButton
                  key={item}
                  label={item}
                  select={handleRadioChange}
                  name="DropPoint"
                  id={`drop-${item}`}
                  className="text-xs sm:text-lg font-semibold flex items-center gap-2"
                />
              ))}
            </div>
            <div className=" flex flex-col border-b border-custom-darkgray py-2">
              <Heading
                heading="Rating"
                className="font-bold text-sm sm:text-2xl"
              />
              {ratingFilter.map((item) => (
                <CheckBox
                  select={handleCheckboxChange}
                  name="busRating"
                  key={item}
                  // isChecked={filterObject.busRating.includes(item)}
                  label={item}
                  className="text-xs sm:text-lg font-semibold flex items-center gap-2"
                />
              ))}
            </div>
            <div className=" flex flex-col border-b border-custom-darkgray py-2">
              <Heading
                heading="Bus Operator"
                className="font-bold text-sm sm:text-2xl"
              />
              {busOperatorFilter.map((item) => (
                <CheckBox
                  select={handleCheckboxChange}
                  name="busOperator"
                  // isChecked={filterObject.busOperator.includes(item)}
                  key={item}
                  label={item}
                  className="text-xs sm:text-lg font-semibold flex items-center gap-2"
                />
              ))}
            </div>
          </div>
        </div>
        {/* Section 2.2 : Available bus details */}
        <div className="flex flex-col w-5/6 md:w-4/6 xxl:w-4/6 gap-4 items-center">
          {/* Section 2.2.1 : Date */}
          <DateSelector />

          {/* Section 2.2.2 : Bus cards */}
          <div className="flex w-full flex-col overflow-scroll no-scrollbar h-screen gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return <BusDetailCard key={item} />;
            })}
          </div>
        </div>
      </div>
      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
};

export default AvailableBus;

// This is Structure of Filter object
// const [filterObject, setFilterObject] = useState({
//   arrivalTime: [],
//   departureTime: [],
//   PickupPoint: "",
//   DropPoint: "",
//   busRating: [],
//   busOperator: [],
// });

// This is data representation
// const filterObject = {
//   DropPoint: "Delhi",
//   PickupPoint: "Ahmedabad",
//   arrivalTime: ["Morning Session", "Afternoon Session"],
//   busOperator: ["Tata Motors", "Eicher Motors"],
//   busRating: ["4 Star or more", "3 Star or more"],
//   departureTime: ["Evening Session", "Afternoon Session"],
// };
