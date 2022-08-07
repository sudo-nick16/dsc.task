import type { NextPage } from "next";
import { useState } from "react";
import DropDown from "../Common/DropDown";

type MenuBarProps = {
  className?: string;
  newAvailable: string;
};

const MenuBar: NextPage<MenuBarProps> = ({ className = "", newAvailable }) => {
  const options = [
    { name: "Latest", value: "latest " },
    { name: "Popular", value: "popular" },
    { name: "Premium", value: "premium" },
    { name: "Free", value: "free" },
  ];
  const [showBy, setShowBy] = useState<DropDownOption>(options[0]);
  return (
    <div
      className={`${className} mt-8 mx-auto flex xxs:flex-row justify-between items-center w-[90%] xxs:w-[95%]`}
    >
      <DropDown
        value={showBy!}
        setValue={setShowBy}
        className="bg-[#fff] block xxs:hidden rounded-md"
        options={options}
      />
      <div className="flex sm:flex-row text-base sm:text-xl font-medium">
        <span
          className={`menu-items ${
            newAvailable === "Latest" && "menu-items-pinged"
          }`}
        >
          Latest
        </span>
        <span
          className={`menu-items  ${
            newAvailable === "Popular" && "menu-items-pinged"
          }`}
        >
          Popular
        </span>
        <span className="mx-2 hidden xxs:block">|</span>
        <span
          className={`menu-items text-orange  ${
            newAvailable === "Premium" && "menu-items-pinged"
          }`}
        >
          Premium
        </span>
        <span
          className={`menu-items text-blue  ${
            newAvailable === "Free" && "menu-items-pinged"
          }`}
        >
          Free
        </span>
      </div>
      <div className="flex justify-end w-full">
        <img
          src="/icons/filter.png"
          alt="filter"
          className="h-7 w-7 xxs:h-8 xxs:w-8 mx-2 cursor-pointer hover:scale-105 s-transition"
        />
        <img
          src="/icons/bookmarks.png"
          alt="bookmark"
          className="h-7 w-7 xxs:h-8 xxs:w-8 mx-2 cursor-pointer hover:scale-105 s-transition"
        />
      </div>
    </div>
  );
};

export default MenuBar;
