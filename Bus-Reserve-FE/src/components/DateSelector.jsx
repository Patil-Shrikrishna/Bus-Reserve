import React, { useEffect, useState } from "react";
import moment from "moment";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { updateTravelDate } from "../redux/actions/journeyData/updateTravelDate";

const DateSelector = () => {
  const selectedDateFromState = useSelector((state) =>
    moment(state.updateJourney.journeyDetails.selectedDate).format(
      "DD MMM YYYY"
    )
  );
  const monthsArray = [0, 1, 2, 3, 4].map((n) =>
    moment().add(n, "months").format("MMM YYYY")
  );
  const monthMap = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
  const userSelectedDate = Number(selectedDateFromState.split(" ")[0]);
  const userSelectedMonthYear = `${
    selectedDateFromState.split(" ")[1]
  } ${Number(selectedDateFromState.split(" ")[2])}`;
  const [currentMonth, setCurrentMonth] = useState(
    monthMap[selectedDateFromState.split(" ")[1]]
  );

  const [currentYear, setCurrentYear] = useState(
    Number(selectedDateFromState.split(" ")[2]) || moment().year()
  );
  const [currentMonthYear, setCurrentMonthYear] = useState(
    monthsArray.indexOf(userSelectedMonthYear) === 0
      ? "0"
      : monthsArray.indexOf(userSelectedMonthYear) || currentMonth
  );
  console.log("currentMonth", currentMonth);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(userSelectedDate);
  const dispatch = useDispatch();
  const daysInMonth = moment(
    `${currentYear}-${currentMonth + 1}`,
    "YYYY-MM"
  ).daysInMonth();
  const dates = [];
  for (
    let day = currentMonth === moment().month() ? moment().date() : 1;
    day <= daysInMonth;
    day++
  ) {
    dates.push(day);
  }

  const handleDateClick = (e, index) => {
    setSelected(index);
    let date = e.target.textContent.split(" ")[0];
    const selectedDate = moment(
      `${currentYear}-${currentMonth + 1}-${date}`,
      "YYYY-MM-DD"
    );

    const updatedDate = moment(selectedDate, "DD MMM YYYY")
      .add(5, "hours")
      .add(30, "minutes")
      .toISOString();

    dispatch(updateTravelDate(updatedDate));
  };

  const calender = dates.map((date, index) => (
    <button
      key={index}
      value={moment(`${currentYear}-${currentMonth + 1}-${date}`)}
      className={`flex flex-col items-center px-4 justify-center text-sm md:text-md xl:text-lg font-medium uppercase ${
        selected === date && "bg-custom-darkgray text-white"
      }`}
      onClick={(e) => handleDateClick(e, date)}
    >
      {`${JSON.stringify(date)}
      ${moment(`${currentYear}-${currentMonth + 1}-${date}`).format("ddd")}`}
    </button>
  ));

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (item, index) => {
    setCurrentMonth(monthMap[item.split(" ")[0]]);
    setCurrentYear(Number(item.split(" ")[1]));
    setCurrentMonthYear(index);
    setIsOpen(!isOpen);
  };

  const list = monthsArray.map((item, index) => {
    return (
      <div
        key={item}
        onClick={() => handleClick(item, index)}
        className="option w-fit px-4 py-2 hover:bg-gray-100 cursor-pointer "
      >
        {item}
      </div>
    );
  });

  useEffect(() => {
    setCurrentMonth(
      monthMap[selectedDateFromState.split(" ")[1]] || moment().month()
    );

    const calendar = document.getElementById("calendar");
    const scrollLeft = document.getElementById("scrollLeft");
    const scrollRight = document.getElementById("scrollRight");

    if (calendar && scrollLeft && scrollRight) {
      scrollLeft.addEventListener("click", function () {
        calendar.scrollLeft -= 15;
      });

      scrollRight.addEventListener("click", function () {
        calendar.scrollLeft += 15;
      });
    }
  }, []);
  return (
    <div className="flex w-full items-center border border-custom-darkgray bg-custom-lightgray rounded-lg ">
      <button className="px-4" id="scrollLeft">
        <BsChevronCompactLeft size={24} />
      </button>
      {/* <MonthSelector /> */}
      <div className="relative inline-block text-left pr-10">
        <div>
          <button
            type="button"
            id="custom-select"
            onClick={handleToggle}
            className="-rotate-90 text-custom-green text-xl font-bold w-fit h-fit"
          >
            {monthsArray[currentMonthYear]}
          </button>
        </div>
        <div
          id="select-items"
          className={`absolute z-10 mt-2 py-1 w-full h-52 overflow-scroll no-scrollbar bg-white border border-gray-300 rounded-md shadow-md ${
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
            className="flex gap-1 md:gap-2 lg:gap-4 xl:gap-4 w-full"
          >
            {calender}
          </div>
        </div>
      </div>
      <button className="px-4" id="scrollRight">
        <BsChevronCompactRight size={24} />
      </button>
    </div>
  );
};

export default DateSelector;
