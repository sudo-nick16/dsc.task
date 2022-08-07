import type { NextPage } from "next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-wrapper";
import { useMediaQuery } from "react-responsive";

type DropDownProps = {
  className?: string;
  innerBoxClassName?: string;
  setValue: Dispatch<SetStateAction<DropDownOption>>;
  value: DropDownOption;
  options: DropDownOption[];
};

const DropDown: NextPage<DropDownProps> = ({
  className="",
  innerBoxClassName="",
  value,
  setValue,
  options = [],
}) => {
  const isSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const [show, setShow] = useState(false);
  const setValueHandler = (option: DropDownOption) => {
    setValue(option);
    setShow(false);
  };
  return (
    <div data-testid="dropdown" className={`${className} relative z-20`}>
      <OutsideClickHandler
        onOutsideClick={() => {
          setShow(false);
        }}
        className={`${innerBoxClassName} bg-[#fff] overflow-hidden rounded-md w-max flex flex-col justify-between`}
      >
        <span
          className="flex items-center py-2 w-auto cursor-pointer text-sm sm:text-base"
          onClick={() => {
            setShow(!show);
          }}
        >
          <p className="pl-2 pr-1" data-testid="show" >{value.name}</p>
          <img
            src="/icons/down-arrow.png"
            className="h-3 w-3 ml-auto mr-2 cursor-pointer"
            alt="down"
            onClick={() => {
              setShow(!show);
            }}
          />
        </span>
        <div
          // using style because safelisting custom style would be tedious
          style={
            show
              ? {
                  height: `${(options.length - 1) * (isSmall ? 2.25 : 2.5)}rem`,
                }
              : { height: "0" }
          }
          className={` text-sm sm:text-base s-transition flex overflow-hidden flex-col`}
        >
          {options
            .filter((item) => item.value !== value.value)
            .map((item, index) => {
              return (
                <span
                  key={index}
                  className="py-2 px-2 hover:bg-white cursor-pointer"
                  onClick={() => setValueHandler(item)}
                >
                  {item.name}
                </span>
              );
            })}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default DropDown;
