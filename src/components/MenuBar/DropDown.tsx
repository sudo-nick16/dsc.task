import type { NextPage } from "next";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-wrapper";

type DropDownProps = {
  className?: string;
  options: string[];
};

const DropDown: NextPage<DropDownProps> = ({ className, options = [] }) => {
  const [value, setValue] = useState(options[0] || "");
  const [show, setShow] = useState(false);
  const setValueHandler = (value: string) => {
    setValue(value);
    setShow(false);
  };
  return (
    <div className={`${className} rounded-md relative h-9 z-10`}>
      <OutsideClickHandler
        onOutsideClick={() => {
          setShow(false);
        }}
        className="rounded-md w-[5.5rem] sm:w-24 flex flex-col justify-between"
      >
        <span
          className="flex items-center py-2 px-2 cursor-pointer text-sm sm:text-base"
          onClick={() => {
            setShow(!show);
          }}
        >
          {value}{" "}
          <img
            src="/icons/down-arrow.png"
            className="h-3 w-3 ml-auto cursor-pointer"
            alt="down"
            onClick={() => {
              setShow(!show);
            }}
          />
        </span>
        <div
          className={`${
            show ? "h-28" : "h-0"
          } text-sm xxs:text-base s-transition bg-[#fff] flex overflow-hidden flex-col justify-evenly`}
        >
          {options.map((item, index) => {
            if (item === value) {
              return null;
            }
            return (
              <span
                key={index}
                className="py-1 px-2 hover:bg-white cursor-pointer overflow-hidden"
                onClick={() => setValueHandler(item)}
              >
                {item}
              </span>
            );
          })}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default DropDown;
