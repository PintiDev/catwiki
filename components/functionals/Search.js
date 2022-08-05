import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
  return (
    <label className="relative  flex  items-center  bg-white text-themeBlack rounded-full px-5 overflow-hidden h-14 w-full ">
      <input
        type={"text"}
        className="w-full h-full outline-none  bg-transparent placeholder:text-themeBlack "
        placeholder="Enter Your Breed"
      />
      <AiOutlineSearch size={23} />
    </label>
  );
};

export default Search;
