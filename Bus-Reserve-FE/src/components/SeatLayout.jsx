import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import vacantSeat from "../assets/available-bus-seat.svg";
import bookedSeat from "../assets/booked-bus-seat.svg";
import selectedSeat from "../assets/selected-bus-seat.svg";
import Seat from "./Seat";

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
      `${seatNum}12`,
      `${seatNum}14`,
    ],
    [
      `${seatNum}01`,
      `${seatNum}03`,
      `${seatNum}05`,
      `${seatNum}07`,
      `${seatNum}09`,
      `${seatNum}11`,
      `${seatNum}13`,
    ],
  ];

  const [selected, setSelected] = useState([]);

  const handleClick = (seat) => {
    if (selected?.includes(seat) === true) {
      setSelected((prev) => prev.filter((item) => item !== seat));
    } else {
      setSelected((prev) => [...prev, seat]);
    }
    props.selected(seat);
  };

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
                <Seat
                  key={seat}
                  seat={seat}
                  onClick={handleClick}
                  img={selected.includes(seat) ? selectedSeat : vacantSeat}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
