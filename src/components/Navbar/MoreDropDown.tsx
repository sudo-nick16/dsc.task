import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-wrapper";

type MoreDropDownProps = {
  className?: string;
  callback: () => void;
  options: {
    option: string;
    link: string;
  }[];
};

const MoreDropDown: NextPage<MoreDropDownProps> = ({
  className = "",
  callback,
  options = [],
}) => {
  const [showMore, setShowMore] = useState(false);
  const choiceHandler = () => {
    setShowMore(false);
    callback();
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => setShowMore(false)}
      className={`${className} font-semibold relative cursor-pointer`}
    >
      <span
        className="flex items-center text-black"
        onClick={() => setShowMore(!showMore)}
      >
        More
        <img
          src="icons/down-filled-arrow.png"
          alt=""
          className={`h-2 w-2 ml-2 s-transition ${
            showMore ? "rotate-180" : ""
          }`}
        />
      </span>
      <div
        // using style to avoid safelisting in tailwind config
        style={
          showMore ? { height: `${options.length * 3}rem` } : { height: "0rem" }
        }
        className={`flex flex-col rounded-md lg:mt-1 s-transition overflow-y-clip absolute top-full left-0 w-full lg:w-auto`}
      >
        {options.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <a
                onClick={() => choiceHandler()}
                className="py-3 pl-8 lg:pl-2 w-full pr-2 text-black font-medium bg-[#ffffff] hover:bg-[#e7e7e7] hover:shadow-lg"
              >
                {item.option}
              </a>
            </Link>
          );
        })}
      </div>
    </OutsideClickHandler>
  );
};

export default MoreDropDown;
