import React from "react";
import Heading from "./Heading";

const DateComponent = (props) => {
  // let day = new Date().getDay();
  // let date = new Date().getDate();
  // let month = new Date().getMonth();
  // let year = new Date().getFullYear();

  const dates = [];
  const currentMonth = 10;
  const currentYear = 2023;

  const currentDate = new Date(currentYear, currentMonth, 1 + props.week);

  while (currentDate.getMonth() === currentMonth && dates.length < 10) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const calender = dates.map((date) => (
    <div className=" flex flex-col items-center">
      <Heading
        heading={JSON.stringify(date.getDate())}
        className="text-sm md:text-md xl:text-2xl font-bold"
      />
      <Heading
        heading={weekDays[JSON.stringify(date.getDay())]}
        className="text-sm md:text-md xl:text-lg font-medium uppercase"
      />
    </div>
  ));
  return (
    <div className="flex gap-4 w-full items-center">
      <Heading
        heading={monthsArray[currentMonth]}
        className="font-bold uppercase text-md text-custom-green -rotate-90"
      />
      <div className="flex gap-4">{calender}</div>
    </div>
  );
};

export default DateComponent;
