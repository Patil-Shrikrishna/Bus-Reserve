import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import Heading from "../components/Heading";
import buses from "../assets/buses.jpg";
import happy from "../assets/happy-customer.png";
import ticket from "../assets/ticket.jpg";
import Selector from "../components/Selector";

const Home = () => {
  const cityList = [
    "Mumbai",
    "Pune",
    "Delhi",
    "Ahmedabad",
    "Thiruanantpuram",
    "Bengalore",
  ];

  return (
    <div>
      {/* Section 1: Navber */}
      <Navbar />
      {/*Section 2: Hero Image */}
      <div className="bg-custom-bg-heroImage bg-cover h-screen flex px-48 flex-col overflow-scroll no-scrollbar lg:flex-row">
        {/* From section */}
        <Selector
          type="From"
          stateCity="Ahmedabad, Gujrat"
          country="India"
          cities={cityList}
        />
        {/* To section */}
        <Selector
          type="To"
          stateCity="New Delhi, Delhi"
          country="India"
          cities={cityList}
        />
        {/* Date section */}
        <Selector htmlFor="selectDate" type="Travel Date" />
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
