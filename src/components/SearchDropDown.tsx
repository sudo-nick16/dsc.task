import type { NextPage } from "next";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-wrapper";

type SearchDropDownProps = {
  className?: string;
};

const SearchDropDown: NextPage<SearchDropDownProps> = ({ className }) => {
  const collection = ["Vectors", "Photos", "PSDs", "Videos"];
  const [value, setValue] = useState(collection[0]);
  const [show, setShow] = useState(false);
  const setValueHandler = (value: string) => {
    setValue(value);
    setShow(false);
  };
  return (
    <div className={`${className} relative h-10 z-20`}>
      <OutsideClickHandler
        onOutsideClick={() => {
          setShow(false);
        }}
        className="bg-[#fff] border rounded-md w-[5.5rem] sm:w-24 flex flex-col justify-between"
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
          } text-sm sm:text-base s-transition flex overflow-hidden flex-col justify-evenly`}
        >
          {collection.map((item, index) => {
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

export default SearchDropDown;
