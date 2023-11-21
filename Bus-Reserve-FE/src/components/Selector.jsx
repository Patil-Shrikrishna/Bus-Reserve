import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import InputBar from "./InputBar";
import { BsChevronDown } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Selector = (props) => {
  const [date, setDate] = useState(dayjs());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    handleHeadingClick();
  }, [props.id]);

  const handleHeadingClick = (selectedValue) => {
    console.log("selectedValue", selectedValue);
    setDate(date);
    setIsVisible(false);
    props.onClick(props.id, selectedValue);
  };

  return (
    <div className="flex flex-col gap-4 w-1/3 ">
      <div className="flex bg-white border-2 rounded-s-lg w-full justify-between">
        <div className="bg-white px-6 w-full flex items-center justify-center ">
          <div
            className="w-full p-2 bg-white"
            onClick={() => setIsVisible(!isVisible)}
          >
            <div className="flex items-center justify-between">
              <Heading
                heading={props.type}
                className="font-semibold text-sm md:text-md xl:text-lg xxl:text-xl text-custom-darkgray"
              />
              {props.type === "Travel Date" ? (
                <MdOutlineDateRange size={24} />
              ) : (
                <BsChevronDown size={24} />
              )}
            </div>
            <Heading
              heading={
                props.type === "Travel Date"
                  ? props.date || date.format("DD MMM YYYY")
                  : props.stateCity
              }
              className="font-semibold text-md md:text-lg xl:text-2xl xxl:text-4xl hover:cursor-pointer"
            />
            {(props.country || props.type === "Travel Date") && (
              <Heading
                heading={
                  props.type === "Travel Date"
                    ? date.format("DD MMM YYYY")
                    : props.country
                }
                className={`font-semibold text-sm md:text-md xl:text-lg xxl:text-xl ${
                  props.country || props.type === "Travel Date"
                    ? "invisible"
                    : ""
                }`}
              />
            )}
          </div>
        </div>
      </div>
      {props.type === "Travel Date" ? (
        <div
          className={`bg-white w-fit h-fit px-2 ${
            isVisible ? "block" : "hidden"
          }`}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={date}
              onChange={(date) =>
                handleHeadingClick(date.format("DD MMM YYYY"))
              }
            />
          </LocalizationProvider>
        </div>
      ) : (
        <div
          className={`bg-white flex flex-col w-fit p-2 ${
            isVisible ? "block" : "hidden"
          }`}
        >
          <div>
            <InputBar type="search" />
          </div>
          <div>
            {props.cities &&
              props.cities.map((city, index) => (
                <Heading
                  key={index}
                  heading={city}
                  className="font-semibold text-sm md:text-md xl:text-lg xxl:text-xl"
                  onClick={() => handleHeadingClick(city)}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Selector;
