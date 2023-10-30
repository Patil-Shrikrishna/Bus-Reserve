import React from "react";
import Heading from "./Heading";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="flex flex-col bg-custom-gray items-center">
      <div className="flex w-full px-40 py-16">
        <div className="flex flex-col w-1/2 gap-2">
          <img src={logo} className="w-40 object-contain mr-10" />
          <div className="flex flex-col w-2/5 gap-2 pt-4">
            <p>When you have a choice. Choose Reserve.</p>
            <p>
              Reserve offers bus tickets booking through it’s website, IOS, and
              android mobile apps for all major cities
            </p>
            <p>When you have a choice. Choose Reserve.</p>
          </div>
        </div>
        <div className="flex w-1/2 gap-32 justify-end">
          <div>
            <Heading heading="About" className="pb-4" />
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div>
            <Heading heading="Useful Links" className="pb-4" />
            <p>Careers</p>
            <p>FAQ</p>
            <p>T & C</p>
            <p>Privacy Policy</p>
            <p>Blog</p>
          </div>
          <div>
            <Heading heading="Follow Us" className="pb-4" />
            <div className="flex gap-2">
              <img src={instagram} className="" />
              <img src={facebook} className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="border w-11/12 border-black"></div>
      <Heading heading="All Rights Reserved - 2023" className="p-4" />
    </div>
  );
};

export default Footer;
