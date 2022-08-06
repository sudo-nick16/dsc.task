import type { NextPage } from "next";
import DiscoverCollections from "./DiscoverCollections";
import Pagination from "./Pagination";

type FooterProps = {
  className?: string;
};

const Footer: NextPage<FooterProps> = ({ className }) => {
  return (
    <div className="flex flex-col items-center lg:flex-row w-full justify-between py-4 px-8 mb-10">
      <DiscoverCollections
        collection={[
          "cycle.jpg",
          "woman.jpg",
          "vintage-collage.jpg",
          "skel-bike.jpg",
          "rainbow.jpg",
        ]}
        className="mt-4"
      />
      <button className="bg-[#fff] text-sm xxs:text-base rounded-md mt-8 w-fit flex items-center px-4 xxs:px-6 shadow-md py-2 xxs:py-3 hover:translate-x-1 s-transition">
        Next page
        <img
          src="/icons/right-arrow.png"
          className="w-5 h-5 xxs:w-6 xxs:h-6 ml-2 xxs:ml-4"
          alt="right-arrow"
        />
      </button>
      <Pagination
        className="mt-8"
        currentPage={1}
        nextCallback={() => {}}
        nextDisabled={false}
        prevCallback={() => {}}
        prevDisabled={true}
        totalPages={120}
      />
    </div>
  );
};

export default Footer;
