import React from "react";
import Heading from "./Heading";
import vacant from "../assets/available-bus-seat.svg";

const SeatLayout = (props) => {
  const seatNum = props.berth == "Upper Berth" ? "U" : "L";
  const Seats = [
    [
      `${seatNum}15`,
      `${seatNum}16`,
      `${seatNum}17`,
      `${seatNum}18`,
      `${seatNum}19`,
    ],
    [],
    [
      `${seatNum}02`,
      `${seatNum}04`,
      `${seatNum}06`,
      `${seatNum}08`,
      `${seatNum}10`,
      `${seatNum}012`,
      `${seatNum}014`,
    ],
    [
      `${seatNum}01`,
      `${seatNum}03`,
      `${seatNum}05`,
      `${seatNum}07`,
      `${seatNum}09`,
      `${seatNum}011`,
      `${seatNum}013`,
    ],
  ];

  return (
    <div className="flex gap-2">
      {/* Line 1 */}
      <div className="flex flex-col gap-4 p-2 border border-custom-darkgray justify-center items-center rounded-lg">
        <div className="flex items-center">
          <Heading
            heading={props.berth}
            className="text-sm font-bold text-custom-darkgray"
          />
        </div>
        {/* Seats */}
        <div className="flex items-end gap-2">
          {Seats.map((line) => (
            <div key={line} className="flex flex-col gap-1 ">
              {line.map((seat) => (
                <button
                  key={seat}
                  value={seat}
                  onClick={() => console.log(seat)}
                >
                  <img src={vacant} className="flex w-4 h-8 sm:w-6 sm:h-12 " />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
