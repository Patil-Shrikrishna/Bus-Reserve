import React from "react";
import moment from "moment";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import Heading from "./Heading";

const DateSelector = () => {
  const [currentMonth, setCurrentMonth] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const currentYear = moment().year();
  const daysInMonth = moment(
    `${currentYear}-${currentMonth + 1}`,
    "YYYY-MM"
  ).daysInMonth();
  const dates = [];

  for (let day = 1; day <= daysInMonth; day++) {
    // const date = moment(`${year}-${currentMonth + 1}-${day}`, "YYYY-MM-DD");
    dates.push(day);
  }

  const calender = dates.map((date, index) => (
    <button
      key={index}
      value={moment(`${currentYear}-${currentMonth + 1}-${date}`, "YYYY-MM-DD")}
      className=" flex flex-col items-center justify-center"
    >
      <Heading
        heading={JSON.stringify(date)}
        className="text-sm md:text-md xl:text-2xl font-bold"
      />
      <Heading
        heading={moment(`${currentYear}-${currentMonth + 1}-${date}`).format(
          "ddd"
        )}
        className="text-sm md:text-md xl:text-lg font-medium uppercase"
      />
    </button>
  ));
  const monthsArray = [0, 1, 2, 3, 4].map((n) =>
    moment().add(n, "months").format("MMM YYYY")
  );

  // const monthsArray = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "Jul",
  //   "Aug",
  //   "Sep",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  // ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (item, index) => {
    setCurrentMonth(index);
    setIsOpen(!isOpen);
  };
  const list = monthsArray.map((item, index) => {
    return (
      <div
        key={item}
        onClick={() => handleClick(item, index)}
        className="option px-4 py-2 hover:bg-gray-100 cursor-pointer "
      >
        {item}
      </div>
    );
  });

  React.useEffect(() => {
    const calendar = document.getElementById("calendar");
    const scrollLeft = document.getElementById("scrollLeft");
    const scrollRight = document.getElementById("scrollRight");

    if (calendar && scrollLeft && scrollRight) {
      scrollLeft.addEventListener("click", function () {
        calendar.scrollLeft -= 15; // Adjust the value to control the scroll distance
      });

      scrollRight.addEventListener("click", function () {
        calendar.scrollLeft += 15; // Adjust the value to control the scroll distance
      });
    }
  }, []);
  return (
    <div className="flex w-full items-center border border-custom-darkgray bg-custom-lightgray rounded-lg ">
      <button className="" id="scrollLeft">
        <BsChevronCompactLeft size={24} />
      </button>
      {/* <MonthSelector /> */}
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            id="custom-select"
            onClick={handleToggle}
            className="-rotate-90 text-custom-green text-xl font-bold w-fit h-fit"
          >
            {monthsArray[currentMonth]}
          </button>
        </div>
        <div
          id="select-items"
          className={`absolute z-10 mt-2 py-1 w-fit h-52 overflow-scroll no-scrollbar bg-white border border-gray-300 rounded-md shadow-md ${
            isOpen ? "" : "hidden"
          } `}
        >
          {list}
        </div>
      </div>
      <div
        id="calendar"
        className="overflow-scroll no-scrollbar flex w-full items-start justify-start"
      >
        <div className="flex w-full items-center">
          <div
            id="calendar"
            className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-14 w-full"
          >
            {calender}
          </div>
        </div>
      </div>
      <button className="" id="scrollRight">
        <BsChevronCompactRight size={24} />
      </button>
    </div>
  );
};

export default DateSelector;
