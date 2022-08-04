import type { NextPage } from "next";
import DiscoverCollections from "./DiscoverCollections";
import Pagination from "./Pagination";

type FooterProps = {
  className?: string;
};

const Footer: NextPage<FooterProps> = ({ className }) => {
  return (
    <div className="flex bound-container justify-between">
      <DiscoverCollections />
      <button className="bg-[#fff] flex items-center px-6 shadow-md py-3">
        Next page
        <img
          src="/icons/right-arrow.png"
          className="w-6 h-6 ml-4"
          alt="right-arrow"
        />
      </button>
      <Pagination
        currentPage={0}
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
