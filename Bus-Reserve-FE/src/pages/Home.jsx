import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import buses from "../assets/buses.jpg";
import happy from "../assets/happy-customer.png";
import ticket from "../assets/ticket.jpg";
import Selector from "../components/Selector";
import { useDispatch, useSelector } from "react-redux";
import { updateJourneyDetails } from "../redux/actions/journeyData/updateJourneyDetails";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import getTrips from "../api/getTrips";
import moment from "moment";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cityData = useSelector((state) => state.cities.cities);
  const cityList = cityData.map((item) => {
    const cities = item.Districts.map((city) => {
      return `${city}, ${item.state}`;
    });
    return cities;
  });

  let [journeyDetails, setJourneyDetails] = useState({
    sourceCity: "",
    destinationCity: "",
    selectedDate: null,
  });
  const dateToString = moment(journeyDetails.selectedDate).format(
    "DD MMM YYYY"
  );

  const handleClick = (id, value) => {
    if (id === "selectedDate") {
      setJourneyDetails((prevDetails) => ({
        ...prevDetails,
        selectedDate: moment(value, "DD MMM YYYY")
          .add(5, "hours")
          .add(30, "minutes")
          .toISOString(),
      }));
    } else {
      setJourneyDetails((prevDetails) => ({
        ...prevDetails,
        [id]: value,
      }));
    }
  };

  const handleSearch = () => {
    const searchQuery = {
      travelDate: new Date(journeyDetails.selectedDate).toISOString(),
      from: journeyDetails.sourceCity,
      to: journeyDetails.destinationCity,
    };
    dispatch(getTrips(searchQuery));
    dispatch(updateJourneyDetails(journeyDetails));
    navigate("/trips");
  };
  return (
    <div>
      {/* Section 1: Navber */}
      <Navbar />
      {/*Section 2: Hero Image */}
      <div className="bg-custom-bg-heroImage bg-cover h-screen flex px-48 overflow-scroll no-scrollbar flex-col ">
        {/* From section */}
        <div className="flex flex-col gap-10 mt-20 xl:mt-32 xxl:mt-56 ">
          <div className="flex ">
            <Selector
              type="From"
              id="sourceCity"
              stateCity={`${journeyDetails.sourceCity || "Select City"}`}
              country={`${journeyDetails.sourceCity && "India"}`}
              cities={cityList}
              onClick={handleClick}
            />
            {/* To section */}
            <Selector
              type="To"
              id="destinationCity"
              stateCity={`${journeyDetails.destinationCity || "Select City"}`}
              country={`${journeyDetails.destinationCity && "India"}`}
              cities={cityList}
              onClick={handleClick}
            />
            {/* Date section */}
            <Selector
              type="Travel Date"
              id="selectedDate"
              date={`${
                dateToString === "Invalid date" ? "Select Date" : dateToString
              }`}
              onClick={handleClick}
            />
          </div>
          <div className="flex justify-center ">
            <Button name="Search" onClick={handleSearch} />
          </div>
        </div>
      </div>

      {/* Section 3: Milestones */}
      <div className="flex flex-col items-center">
        <Heading
          heading="Book ticket with worlds largest booking site"
          className="pt-8 lg:text-3xl md:text-2xl text-xl font-bold"
        />
        <div className="flex justify-center my-10 gap-4 ">
          <div className="flex flex-col items-center w-3/12 shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] justify-between">
            <img src={buses} className="w-3/4 p-2" />
            <div className="flex flex-col items-center">
              <Heading
                heading="2000+"
                className="font-bold lg:text-3xl md:text-2xl text-xl"
              />
              <p className="pb-4 text-center">bus collection</p>
            </div>
          </div>

          <div className="flex flex-col items-center w-3/12 shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] justify-between">
            <img src={happy} className="w-3/4 p-4" />
            <div className="flex flex-col items-center">
              <Heading
                heading="20 Million"
                className="font-bold lg:text-3xl md:text-2xl text-xl"
              />
              <p className="pb-4 text-center">happy customers globally</p>
            </div>
          </div>

          <div className="flex flex-col items-center w-3/12 shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] justify-between">
            <img src={ticket} className="w-3/4 p-4" />
            <div className="flex flex-col items-center">
              <Heading
                heading="5000+"
                className="font-bold lg:text-3xl md:text-2xl text-xl"
              />
              <p className="pb-4 text-center">tickets booked everyday</p>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4: Customer Reviews */}
      <div className="flex flex-col items-center my-10">
        <Heading
          heading="Here’s what a few of our customers have to say about us"
          className="lg:text-4xl text-xl text-center font-bold p-6 px-14 lg:px-10 lg:w-2/5 w-2/4"
        />
        <div className="flex flex-col xs:flex-row md:flex-row justify-center items-center w-full bg-custom-gray py-14 gap-4">
          <div className="flex flex-col p-6 xs:w-1/6 lg:w-1/6 xl:w-1/4 xxl:w-1/6 w-2/3  justify-between bg-white gap-2">
            <div className="flex items-center gap-4">
              <div className="bg-[#FDCDCD] px-2 rounded-full">
                <Heading
                  heading="V"
                  className="text-4xl w-8 h-12 text-white font-bold flex items-center justify-center"
                />
              </div>
              <div className="flex flex-col">
                <Heading
                  heading="Vatsal Agrawal"
                  className="text-xl font-bold"
                />
                <p>Customer since 2020</p>
              </div>
            </div>
            <Rating rating="4.5" />
            <p>Awesome travel experience with reserve. Excellent staff.</p>
          </div>

          <div className="flex flex-col p-6 xs:w-1/6 lg:w-1/6 xl:w-1/4 xxl:w-1/6 w-2/3  justify-between bg-white gap-2">
            <div className="flex items-center gap-4">
              <div className="bg-[#FDCDCD] px-2 rounded-full">
                <Heading
                  heading="V"
                  className="text-4xl w-8 h-12 text-white font-bold flex items-center justify-center"
                />
              </div>
              <div className="flex flex-col">
                <Heading
                  heading="Vatsal Agrawal"
                  className="text-xl font-bold"
                />
                <p>Customer since 2019</p>
              </div>
            </div>
            <Rating rating="4.5" />
            <p>Amazing service. Always a best time with reserve.</p>
          </div>

          <div className="flex flex-col p-6 xs:w-1/6 lg:w-1/6 xl:w-1/4 xxl:w-1/6 w-2/3  justify-between bg-white gap-2">
            <div className="flex items-center gap-4">
              <div className="bg-[#FDCDCD] px-2 rounded-full">
                <Heading
                  heading="V"
                  className="text-4xl w-8 h-12 text-white font-bold flex items-center justify-center"
                />
              </div>
              <div className="flex flex-col">
                <Heading
                  heading="Vatsal Agrawal"
                  className="text-xl font-bold"
                />
                <p>Customer since 2018</p>
              </div>
            </div>
            <Rating rating="4.5" />
            <p>Bus was clean and the journey was smooth. Reached on time.</p>
          </div>
        </div>
      </div>
      {/* Section 5: Footer */}
      <Footer />
      <div></div>
    </div>
  );
};

export default Home;
