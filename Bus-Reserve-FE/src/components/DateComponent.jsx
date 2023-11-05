import React from "react";
import Heading from "./Heading";
import moment from "moment";

const DateComponent = () => {
  const dates = [];

  const year = 2023;
  const month = 10;

  const daysInMonth = moment(`${year}-${month + 1}`, "YYYY-MM").daysInMonth();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = moment(`${year}-${month + 1}-${day}`, "YYYY-MM-DD");
    dates.push(day);
  }

  const calender = dates.map((date, index) => (
    <button
      key={index}
      value={moment(`${year}-${month + 1}-${date}`, "YYYY-MM-DD")}
      className=" flex flex-col items-center justify-center"
    >
      <Heading
        heading={JSON.stringify(date)}
        className="text-sm md:text-md xl:text-2xl font-bold"
      />
      <Heading
        heading={moment(`${year}-${month + 1}-${date}`).format("ddd")}
        className="text-sm md:text-md xl:text-lg font-medium uppercase"
      />
    </button>
  ));

  return (
    <div className="flex w-full items-center">
      <div
        id="calendar"
        className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-14 w-full"
      >
        {calender}
      </div>
    </div>
  );
};

export default DateComponent;
