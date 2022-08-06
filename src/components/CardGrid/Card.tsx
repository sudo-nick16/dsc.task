import type { NextPage } from "next";
import Link from "next/link";

type CardProps = {
  card: card;
  className?: string;
};

const Card: NextPage<CardProps> = ({ card: { premium, title, url, type, hdUrl } }) => {
  return (
    <div className="flex flex-col p-2 xxs:p-3 lg:p-5 bg-[#fff] shadow-[#e7e7e7] rounded-2xl sm:rounded-3xl items-center shadow-xl hover:shadow-2xl s-transition hover:-translate-y-1">
      <div className="h-28 xxs:h-32 sm:h-36 md:h-52 lg:h-64 bg-white w-full rounded-lg sm:rounded-xl select-none md:rounded-3xl md:text-sm lg:text-base overflow-hidden relative font-semibold text-gray">
        <span className="flex items-center absolute top-3 right-3 md:top-3 md:right-3 shadow-sm bg-white px-2 py-1 rounded">
          <img
            src={premium ? "/icons/premium.png" : "/icons/free.png"}
            alt="premium"
            className="h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7"
          />
          <p className="hidden md:block ml-2">{premium ? "Premium" : "Free"}</p>
        </span>
        <img
          src={url}
          alt={title}
          className={`h-full w-full ${
            type === "photo" || type === "illustration" ? "object-cover" : "object-contain p-4"
          }`}
        />
      </div>
      <span className="text-gray mt-1 xxs:mt-2 md:mt-3 mb-0 md:mb-2 text-sm md:text-xl lg:text-2xl text-center w-[95%] overflow-hidden text-ellipsis truncate">
        <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-5xl">
          {title[0].toUpperCase()}
        </span>
        {title.substring(1)}
      </span>
      <Link download={true} href={hdUrl}>
        <a
          target="_blank"
          download={true}
          className="flex items-center font-semibold my-1 md:my-2 lg:my-3 text-base md:text-lg lg:text-2xl s-transition hover:underline s-transition cursor-pointer"
        >
          <p className="hidden xxs:block">Download</p>
          <img
            src="/icons/download.png"
            alt="download"
            className="h-4 w-4 ml-0 md:h-5 md:w-5 lg:h-6 lg:w-6 xxs:ml-3"
          />
        </a>
      </Link>
    </div>
  );
};

export default Card;
