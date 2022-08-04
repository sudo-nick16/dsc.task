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
    <div className="flex flex-col p-5 bg-[#fff] rounded-3xl items-center hover:shadow-xl s-transition hover:-translate-y-1">
      <div className="bg-white rounded-3xl overflow-hidden relative font-semibold text-gray">
        {premium ? (
          <span className="flex items-center absolute top-3 right-3 bg-white px-2 py-1 rounded">
            <img
              src="/icons/premium.png"
              alt="premium"
              className="h-7 w-7 mr-3"
            />
            Premium
          </span>
        ) : (
          <span className="flex items-center absolute top-3 right-3 bg-white px-2 py-1 rounded">
            <img src="/icons/free.png" alt="free" className="h-7 w-7 mr-3" />{" "}
            Free
          </span>
        )}
        <img src={url} alt={title} className="" />
      </div>
      <span className="text-gray my-2 text-2xl">
        <span className="text-black text-4xl">{title[0]}</span>
        {title.substring(1)}
      </span>
      <span className="flex items-center font-bold my-2 text-2xl s-transition hover:underline s-transition cursor-pointer">
        Download
        <img
          src="/icons/download.png"
          alt="download"
          className="h-8 w-8 ml-2"
        />
      </span>
    </div>
  );
};

export default Card;
