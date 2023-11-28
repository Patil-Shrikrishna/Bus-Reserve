import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Button from "../components/Button";
import BusDetailsMiniCard from "../components/BusDetailsMiniCard";
import { useDispatch, useSelector } from "react-redux";
import PassengerInfo from "../components/PassengerInfo";
import { updatePassengerData } from "../redux/actions/bookingData/updatePassengerData";
import postPaymentRequest from "../api/postPaymentRequest";

const PassengerDetailPage = () => {
  const dataToBook = useSelector((state) => state.updateBooking);
  console.log(dataToBook);
  const dispatch = useDispatch();
  const bookingDataFromState = useSelector((state) => state.updateBooking);
  const { busFare, selectedSeats } = dataToBook.booking.bookingDetails;

  const [passengersData, setPassengersData] = useState([]);
  useEffect(() => {
    dispatch(updatePassengerData(passengersData));
  }, [passengersData]);

  const handlePayment = () => {
    dispatch(postPaymentRequest(bookingDataFromState));
  };
  const handlePassengerData = (index, data) => {
    setPassengersData((prevPassengersData) => {
      const updatedPassengersData = [...prevPassengersData];
      updatedPassengersData[index] = data;
      return updatedPassengersData;
    });
  };
  return (
    <div>
      {/* Section 1: Navbar */}
      <Navbar />
      {/* Section 2: Main content */}
      <div className="flex w-full px-40 py-20 justify-between">
        <div className="flex flex-col w-7/12 gap-6 ">
          {/* Section 2.1: Bus Details */}
          <BusDetailsMiniCard data={dataToBook.booking.bookingDetails} />
          {/* Section 2.2 : Traveler Details */}
          <div className="flex flex-col gap-6">
            <Heading
              heading="Enter Traveler Details"
              className="font-bold text-4xl"
            />
            {/* passenger info component here */}
            {selectedSeats.map((item, index) => (
              <PassengerInfo
                key={index}
                seatNumber={item}
                passengerNumber={index + 1}
                data={(data) => handlePassengerData(index, data)}
              />
            ))}
          </div>
        </div>
        {/* Section 2.3 : Fare Details */}
        <div className="border border-black rounded-lg p-4 w-4/12 h-fit">
          <Heading heading="Fare Details" className="font-bold text-4xl" />
          <div className="mt-6 border-b border-custom-darkgray pb-4">
            <div className="flex justify-between">
              <Heading heading="Base Fare" className="font-bold text-xl" />
              <Heading
                heading={`₹ ${busFare * selectedSeats.length}`}
                className="font-bold text-2xl"
              />
            </div>
            <div className="flex justify-between">
              <Heading heading="Tax" className="font-bold text-xl" />
              <Heading heading="₹ 150" className="font-bold text-2xl" />
            </div>
            <div className="flex justify-between">
              <Heading heading="Offer Applied" className="font-bold text-xl" />
              <Heading heading="₹ -50" className="font-bold text-2xl " />
            </div>
          </div>
          <div className="flex justify-between my-6">
            <Heading heading="Total Price" className="font-bold text-2xl" />
            <Heading
              heading={`₹ ${busFare * selectedSeats.length + 100}`}
              className="font-bold text-2xl"
            />
          </div>
          <div className="flex w-full justify-center">
            <Button name="Proceed To Payment" onClick={handlePayment} />
          </div>
        </div>
      </div>
      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
};

export default PassengerDetailPage;
