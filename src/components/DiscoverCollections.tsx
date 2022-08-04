import type { NextPage } from "next";
import Link from "next/link";

type DiscoverCollectionsProps = {};

const DiscoverCollections: NextPage<DiscoverCollectionsProps> = ({}) => {
  const collection = ["cycle.jpg", "woman.jpg", "rainbow.jpg", "retro.jpg"];

  return (
    <div className="flex items-center">
      <Link href={"/collections"}>
        <a className="text-black underline text-lg w-fit">
          Discover All <br /> Collections
        </a>
      </Link>
      <div className="flex ml-4">
        {collection.map((item, index) => {
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
