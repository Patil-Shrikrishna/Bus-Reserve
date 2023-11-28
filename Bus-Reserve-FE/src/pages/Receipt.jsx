import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import ok from "../assets/Ok.svg";
import BusDetailsMiniCard from "../components/BusDetailsMiniCard";
import { useDispatch, useSelector } from "react-redux";
import postBooking from "../api/postBooking";

const Receipt = () => {
  const dispatch = useDispatch();
  const bookingDataFromState = useSelector((state) => state.updateBooking);
  useEffect(() => {
    dispatch(postBooking(bookingDataFromState));
  }, []);

  // const bookingFromState = useSelector((state) => state.booking);
  console.log("bookingFromState", bookingDataFromState);

  return (
    <div>
      {/* Section 1: Navbar */}
      <Navbar />
      {/* Section 2: Main content */}
      <div className="flex flex-col gap-4 rounded-lg justify-center items-center my-20 mx-40 py-10 px-32 border border-custom-darkgray shadow-[0_0px_15px_0px_rgba(0,0,0,0.5)]">
        <img src={ok} />
        <Heading
          heading="Booking has been confirmed"
          className="font-bold text-5xl"
        />
        <div className="flex flex-col w-full gap-2">
          <div className="flex gap-10 w-full">
            <Heading
              heading="Ticket ID:"
              className="font-bold text-xl w-full text-end"
            />
            <Heading heading="56UHRFT" className="font-bold text-xl w-full " />
          </div>
          <div className="flex gap-10 w-full">
            <Heading
              heading="Payment ID:"
              className="font-bold text-xl w-full text-end"
            />
            <Heading
              heading="2545-326E3-7HHH"
              className="font-bold text-xl w-full "
            />
          </div>
          <div className="flex gap-10 w-full">
            <Heading
              heading="Passenger Details:"
              className="font-bold text-xl w-full text-end"
            />
            <Heading
              heading="Megha Agrawal, F, 25 yrs"
              className="font-bold text-xl w-full "
            />
          </div>
          <div className="flex gap-10 w-full">
            <Heading
              heading="Contact Details:"
              className="font-bold text-xl w-full text-end"
            />
            <Heading
              heading="9121999999"
              className="font-bold text-xl w-full "
            />
          </div>
        </div>
        <div className="w-full">
          <BusDetailsMiniCard
            data={bookingDataFromState.booking.bookingDetails}
          />
        </div>
      </div>
      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
};

export default Receipt;
