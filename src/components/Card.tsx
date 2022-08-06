import type { NextPage } from "next";

type CardProps = {
  data: {
    url: string;
    premium: boolean;
    title: string;
  };
  className?: string;
};

const Card: NextPage<CardProps> = ({ data: { premium, title, url } }) => {
  return (
    <div className="flex flex-col p-2 md:p-3 lg:p-5 bg-[#fff] shadow-[#f0efef] rounded-2xl sm:rounded-3xl items-center shadow-xl hover:shadow-2xl s-transition hover:-translate-y-1">
      <div className="bg-white rounded-lg sm:rounded-xl select-none md:rounded-3xl md:text-sm lg:text-base overflow-hidden relative font-semibold text-gray">
        {premium ? (
          <span className="flex items-center absolute top-2 right-2 md:top-3 md:right-3 bg-white px-2 py-1 rounded">
            <img
              src="/icons/premium.png"
              alt="premium"
              className="h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7"
            />
            <p className="hidden md:block ml-2">Premium</p>
          </span>
        ) : (
          <span className="flex items-center absolute top-3 right-3 md:top-3 md:right-3 bg-white px-2 py-1 rounded">
            <img
              src="/icons/free.png"
              alt="free"
              className="h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7"
            />{" "}
            <p className="hidden md:block ml-2">Free</p>
          </span>
        )}
        <img src={url} alt={title} className="" />
      </div>
      <span className="text-gray mt-1 xxs:mt-4 mb-0 md:mb-2 text-sm md:text-xl lg:text-2xl text-center w-[95%] overflow-hidden text-ellipsis truncate">
        <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-5xl">
          {title[0]}
        </span>
        {title.substring(1)}
      </span>
      <span className="flex items-center font-bold my-1 xxs:my-2 text-base md:text-lg lg:text-2xl s-transition hover:underline s-transition cursor-pointer">
        <p className="hidden xxs:block">Download</p>
        <img
          src="/icons/download.png"
          alt="download"
          className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 ml-2"
        />
      </span>
    </div>
  );
};

export default Card;
