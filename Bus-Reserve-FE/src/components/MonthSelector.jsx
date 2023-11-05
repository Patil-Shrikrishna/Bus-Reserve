import moment from "moment";
import React from "react";

const MonthSelector = () => {
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

  const [currentMonth, setCurrentMonth] = React.useState(moment().month());
  const [isOpen, setIsOpen] = React.useState(false);

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

  return (
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
        className={`absolute z-10 mt-2 py-1 w-fit bg-white border border-gray-300 rounded-md shadow-md ${
          isOpen ? "" : "hidden"
        } `}
      >
        {list}
      </div>
    </div>
  );
};

export default MonthSelector;
