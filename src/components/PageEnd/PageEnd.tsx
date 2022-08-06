import type { NextPage } from "next";
import { useAppContext } from "../../context/state";
import scrollToCards from "../../utils/scrollToCards";
import searchHandler from "../../utils/searchHandler";
import DiscoverCollections from "./DiscoverCollections";
import Pagination from "./Pagination";

type PageEnd = {
  className?: string;
};

const PageEnd: NextPage<PageEnd> = ({ className }) => {
  const { state, setState } = useAppContext()!;
  const nextPageHandler = () => {
    if (state.currentPage >= state.totalPages) {
      alert("No more pages");
      return;
    }
    searchHandler({ state, setState }, state.currentPage + 1);
    scrollToCards();
  };
  return (
    <div
      className={`${className} flex flex-col items-center lg:flex-row w-full justify-between py-4 px-8 mb-10`}
    >
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
      <button
        onClick={nextPageHandler}
        className="bg-[#fff] text-sm xxs:text-base rounded-md mt-8 w-fit flex items-center px-4 xxs:px-6 shadow-md py-2 xxs:py-3 hover:translate-x-1 s-transition"
      >
        Next page
        <img
          src="/icons/right-arrow.png"
          className="w-5 h-5 xxs:w-6 xxs:h-6 ml-2 xxs:ml-4"
          alt="right-arrow"
        />
      </button>
      <Pagination className="mt-8" />
    </div>
  );
};

export default PageEnd;
