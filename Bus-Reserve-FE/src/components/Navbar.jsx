import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex h-16 shadow-lg justify-between px-40 items-center">
      <div className="flex gap-5">
        <img src={logo} className="w-40 object-contain mr-10" />
        <Heading heading="Ticket" />
        <Heading heading="Contact Us" />
      </div>
      <div className="flex gap-5">
        <Button name="Login" />
        <Heading heading="Register" />
      </div>
    </div>
  );
};

export default Navbar;
