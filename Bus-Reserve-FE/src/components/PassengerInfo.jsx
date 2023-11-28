import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import InputBar from "./InputBar";

const PassengerInfo = (props) => {
  const [passengerInfo, setPassengerInfo] = useState({
    passengerName: "",
    passengerGender: "",
    passengerAge: "",
    passengerContact: "",
    passengerEmail: "",
    seatNumber: props.seatNumber,
  });

  useEffect(() => {
    props.data(passengerInfo);
  }, [passengerInfo]);

  const handleClick = (name, value) => {
    setPassengerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (event) => {
    setPassengerInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className="border border-custom-darkgray rounded-lg p-4">
      <div className="flex flex-col">
        <div className="flex gap-10">
          <Heading
            heading={`Passenger ${props.passengerNumber}`}
            className="font-bold text-2xl"
          />
          <Heading
            heading={`Seat ${props.seatNumber}`}
            className="font-bold text-2xl"
          />
        </div>
        <div className="flex w-full gap-2">
          <div className="flex flex-col w-2/4">
            <Heading heading="Name" className="font-bold text-xl" />
            <InputBar type="input" name="passengerName" onClick={handleClick} />
          </div>
          <div className="flex flex-col w-1/4">
            <Heading heading="Gender" className="font-bold text-xl" />
            <select
              value={passengerInfo.gender}
              name="passengerGender"
              className="focus:outline-none dropdown border-2 border-gray-300 p-2 rounded-lg"
              onChange={handleGenderChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col w-1/4">
            <Heading heading="Age(In Years)" className="font-bold text-xl" />
            <InputBar type="input" name="passengerAge" onClick={handleClick} />
          </div>
        </div>
        <div className="flex w-full gap-2">
          <div className="flex flex-col w-full">
            <Heading heading="Email ID" className="font-bold text-xl" />
            <InputBar
              type="input"
              name="passengerEmail"
              onClick={handleClick}
            />
          </div>
          <div className="flex flex-col w-full">
            <Heading heading="Mobile No.:" className="font-bold text-xl" />
            <InputBar
              type="input"
              name="passengerContact"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerInfo;
