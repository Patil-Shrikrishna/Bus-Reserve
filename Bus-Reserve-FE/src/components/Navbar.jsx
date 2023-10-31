import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex h-16 shadow-lg shadow-gray-400 justify-between lg:px-40 md:px-20 px-4 items-center relative z-10 ">
      <div className="flex gap-5">
        <img src={logo} className="w-40 object-contain mr-10" />
        <Heading heading="Ticket" className="font-bold" />
        <Heading heading="Contact Us" className="font-bold" />
      </div>
      <div className="flex gap-5">
        <Button name="Login" />
        <Heading heading="Register" className="flex font-bold m-auto" />
      </div>
    </div>
  );
};

export default Navbar;
