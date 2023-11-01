import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BusDetailCard from "../components/BusDetailCard";
import DateComponent from "../components/DateComponent";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

const AvailableBus = () => {
  const [currentWeek, setCurrentWeek] = React.useState(0);
  return (
    <div>
      {/* Section 1: Navbar */}
      <Navbar />
      {/* Section 2: Main content */}
      <div className="flex gap-4 justify-center m-10 xl:my-10 xl:m-0 ">
        {/* Section 2.1 : Filter */}
        <div className="flex flex-col w-1/6 md:w-1/6 xxl:w-1/6 border border-custom-darkgray ">
          Filter
        </div>
        {/* Section 2.2 : Available bus details */}
        <div className="flex flex-col w-5/6 md:w-4/6 xxl:w-4/6 gap-4 items-center">
          {/* Section 2.2.1 : Date */}
          <div className="flex w-full items-center border border-custom-darkgray bg-custom-lightgray rounded-lg">
            <button
              className=""
              onClick={() => setCurrentWeek(currentWeek - 7)}
            >
              <BsChevronCompactLeft size={24} />
            </button>
            <div className="overflow-scroll no-scrollbar ">
              <DateComponent week={currentWeek} />
            </div>
            <button
              className=""
              onClick={() => setCurrentWeek(currentWeek + 7)}
            >
              <BsChevronCompactRight size={24} />
            </button>
          </div>
          {/* Section 2.2.2 : Bus cards */}
          <div className="flex w-full flex-col overflow-scroll no-scrollbar h-screen gap-4">
            <BusDetailCard />
            <BusDetailCard />
            <BusDetailCard />
            <BusDetailCard />
            <BusDetailCard />
            <BusDetailCard />
          </div>
        </div>
      </div>
      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
};

export default AvailableBus;
