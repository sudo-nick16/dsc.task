import type { NextPage } from "next";
import Link from "next/link";

type DiscoverCollectionsProps = {
  className?: string;
  collection: string[];
};

const DiscoverCollections: NextPage<DiscoverCollectionsProps> = ({
  className="",
  collection=[]
}) => {

  return (
    <div
      className={`${className} flex flex-col lg:flex-row items-center translate-x-[30px]`}
    >
      <Link href={"/collections"}>
        <a className="text-black -ml-14 lg:ml-0 s-transition hover:font-medium underline hover:underline text-sm sm:text-base lg:text-lg w-fit lg:w-28">
          Discover All Collections
        </a>
      </Link>
      <div className="flex ml-6 mt-2 lg:mt-0">
        {collection.slice(0, 4).map((item, index) => {
          return (
            <span
              style={{
                transform: `translateX(${index * -30}px)`,
              }}
              key={index}
              className={`bg-[#fff] flex flex-col items-center justify-center p-1 h-14 w-14 shadow-lg rounded-md`}
            >
              <img
                src={`/images/collectionThumbs/${item}`}
                className="rounded-md"
                alt=""
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default DiscoverCollections;
