import type { NextPage } from "next";
import OutsideClickHandler from "react-outside-click-wrapper";
import { useState } from "react";

type SearchProps = {
  className?: string;
};

const Search: NextPage<SearchProps> = ({ className }) => {
  const collection = ["Vectors", "Photos", "PSDs", "Videos"];
  const [value, setValue] = useState(collection[0]);
  const [show, setShow] = useState(false);
  const setValueHandler = (value: string) => {
    setValue(value);
    setShow(false);
  };
  return (
    <div
      className={`${className} mt-4 h-14 mb-9 flex bg-[#fff] px-2 rounded-lg items-center w-max`}
    >
      <div className="relative h-10 w-24">
        <OutsideClickHandler
          onOutsideClick={() => {
            setShow(false);
          }}
          className="bg-[#fff] absolute border rounded-md w-24 flex flex-col justify-between"
        >
          <span
            className="flex items-center py-2 px-2 cursor-pointer"
            onClick={() => {
              setShow(!show);
            }}
          >
            {value}{" "}
            <img
              src="/icons/down-arrow.png"
              className="h-3 w-3 ml-auto cursor-pointer"
              alt=""
              onClick={() => {
                setShow(!show);
              }}
            />
          </span>
          <div
            className={`${
              show ? "h-28" : "h-0"
            } transition-all duration-300 flex overflow-hidden flex-col justify-evenly`}
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
      <input
        type="text"
        placeholder="Search "
        className="outline-none px-4 ml-2 w-[85%] text-black"
      />
      <img
        src="/icons/search.png"
        className="h-6 w-6 mr-4 ml-2 cursor-pointer "
        alt=""
      />
    </div>
  );
};

export default Search;
