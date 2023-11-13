import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Button from "../components/Button";
import InputBar from "../components/InputBar";
import BusDetailsMiniCard from "../components/BusDetailsMiniCard";
const PassengerInfo = () => {
  return (
    <div>
      {/* Section 1: Navbar */}
      <Navbar />
      {/* Section 2: Main content */}
      <div className="flex w-full px-40 py-20 justify-between">
        <div className="flex flex-col w-7/12 gap-6 ">
          {/* Section 2.1: Bus Details */}
          <BusDetailsMiniCard />
          {/* Section 2.2 : Traveler Details */}
          <div className="flex flex-col gap-6">
            <Heading
              heading="Enter Traveler Details"
              className="font-bold text-4xl"
            />
            <div className="border border-custom-darkgray rounded-lg p-4">
              <div className="flex flex-col">
                <div className="flex gap-10">
                  <Heading
                    heading="Passenger 1"
                    className="font-bold text-2xl"
                  />
                  <Heading heading="Seat 3UB" className="font-bold text-2xl" />
                </div>
                <div className="flex w-full gap-2">
                  <div className="flex flex-col w-2/4">
                    <Heading heading="Name" className="font-bold text-xl" />
                    <InputBar type="input" />
                  </div>
                  <div className="flex flex-col w-1/4">
                    <Heading heading="Gender" className="font-bold text-xl" />
                    <InputBar type="input" />
                  </div>
                  <div className="flex flex-col w-1/4">
                    <Heading
                      heading="Age(In Years)"
                      className="font-bold text-xl"
                    />
                    <InputBar type="input" />
                  </div>
                </div>
                <div className="flex w-full gap-2">
                  <div className="flex flex-col w-full">
                    <Heading heading="Email ID" className="font-bold text-xl" />
                    <InputBar type="input" />
                  </div>
                  <div className="flex flex-col w-full">
                    <Heading
                      heading="Mobile No.:"
                      className="font-bold text-xl"
                    />
                    <InputBar type="input" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 2.3 : Fare Details */}
        <div className="border border-black rounded-lg p-4 w-4/12 h-fit">
          <Heading heading="Fare Details" className="font-bold text-4xl" />
          <div className="mt-6 border-b border-custom-darkgray pb-4">
            <div className="flex justify-between">
              <Heading heading="Base Fare" className="font-bold text-xl" />
              <Heading heading="₹ 1798" className="font-bold text-2xl" />
            </div>
            <div className="flex justify-between">
              <Heading heading="Tax" className="font-bold text-xl" />
              <Heading heading="₹ 150" className="font-bold text-2xl" />
            </div>
            <div className="flex justify-between">
              <Heading heading="Offer Applied" className="font-bold text-xl" />
              <Heading heading="₹ 50" className="font-bold text-2xl" />
            </div>
          </div>
          <div className="flex justify-between my-6">
            <Heading heading="Total Price" className="font-bold text-2xl" />
            <Heading heading="₹ 1898" className="font-bold text-2xl" />
          </div>
          <Button name="Proceed To Payment" className="w-full" />
        </div>
      </div>
      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
};

export default PassengerInfo;
