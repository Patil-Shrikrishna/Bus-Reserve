import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = (props) => {
  return (
    <div
      className={`${
        props.className && props.className
      } border-2 border-gray-300 p-2 w-fit rounded-lg`}
    >
      <input
        placeholder={props.name}
        className="bg-custom-bg-seach bg-no-repeat pl-10 text-xl focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
