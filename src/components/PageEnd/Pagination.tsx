import type { NextPage } from "next";
import { useAppContext } from "../../context/state";
import scrollToCards from "../../utils/scrollToCards";
import fetchCards from "../../utils/fetchCards";

type PaginationProps = {
  className?: string;
};

const Pagination: NextPage<PaginationProps> = ({ className }) => {
  const { state, setState } = useAppContext()!;

  const prevPageHandler = () => {
    if (state.currentPage <= 1) {
      return;
    }
    setState((curr: any) => ({ ...curr, currentPage: curr.currentPage - 1 }));
    scrollToCards();
  };

  const nextPageHandler = () => {
    if (state.currentPage >= state.totalPages) {
      alert("No more pages");
      return;
    }
    fetchCards({ state, setState }, state.currentPage + 1);
    scrollToCards();
  };
  return (
    <div
      className={`${className} flex items-center text-sm xxs:text-base text-gray font-semibold`}
    >
      Page
      <div className="flex items-center">
        <button
          className="rounded-md bg-[#EEEFEF] p-2 ml-2"
          onClick={prevPageHandler}
        >
          <img
            className="h-3 w-3 xxs:h-4 xxs:w-4 -rotate-180"
            src={
              state.currentPage === 1
                ? "/icons/right-gray.png"
                : "/icons/right-black.png"
            }
            alt="prev"
          />
        </button>
        {/* don't have enough time to implement this -> change in cache ds could fix the bugs caused by implementing this */}
        {/* <input
          value={state.currentPage}
          onChange={(e) =>
            setState((curr: any) => ({
              ...curr,
              currentPage: parseInt(e.target.value),
            }))
          }
          type="number"
          className="rounded-md border border-gray mx-1 h-7 xxs:h-8 w-10 xxs:w-12 p-2 text-center text-black"
        /> */}
        <div className=" flex items-center justify-center bg-[#fff] rounded-md border border-gray mx-1 h-7 xxs:h-8 w-10 xxs:w-12 p-2 text-center text-black">
          {state.currentPage}
        </div>
        <button
          className="rounded-md bg-[#EEEFEF] p-2 mr-2"
          onClick={nextPageHandler}
        >
          <img
            className="h-3 w-3 xxs:h-4 xxs:w-4"
            src={
              state.currentPage === state.totalPages
                ? "/icons/right-gray.png"
                : "/icons/right-black.png"
            }
            alt="prev"
          />
        </button>
      </div>
      of {state.totalPages}
    </div>
  );
};

export default Pagination;
