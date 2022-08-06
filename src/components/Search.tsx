import type { NextPage } from "next";
import { useState } from "react";
import SearchDropDown from "./SearchDropDown";

type SearchProps = {
  className?: string;
};

const Search: NextPage<SearchProps> = ({ className="" }) => {
  
  return (
    <div
      className={`${className} mt-4 py-2 mb-9 flex bg-[#fff] px-2 rounded-lg items-center w-[90%] sm:w-[36rem]`}
    >
      <SearchDropDown className="" />
      <input
        type="text"
        placeholder="Search "
        className="outline-none mx-1 px-2 sm:mx-3 w-[82%] sm:w-[85%] text-black text-sm sm:text-base"
      />
      <img
        src="/icons/search.png"
        className="h-5 w-5 sm:h-6 sm:w-6 mr-4 cursor-pointer "
        alt=""
      />
    </div>
  );
};

export default Search;
