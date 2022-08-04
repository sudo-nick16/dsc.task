import type { NextPage } from "next";
import { useState } from "react";

type PaginationProps = {
  className?: string;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  totalPages: number;
  currentPage: number;
  prevCallback?: () => void;
  nextCallback?: () => void;
  goToPage?: (page: number) => void;
};

const Pagination: NextPage<PaginationProps> = ({
  className,
  totalPages,
  currentPage,
  prevDisabled,
  nextDisabled,
}) => {
  const [page, setPage] = useState(currentPage);
  return (
    <div className={`${className} flex items-center text-gray font-semibold`}>
      Page
      <div>
        <button className="rounded-md bg-[#EEEFEF] p-2 ">
          <img
            className="h-4 w-4 -rotate-180"
            src={
              prevDisabled ? "/icons/right-gray.png" : "/icons/right-black.png"
            }
            alt="prev"
          />
        </button>
        <input
          value={page}
          onChange={(e) => setPage(parseInt(e.target.value))}
          type="number"
          className="rounded-md border border-gray mx-[1px] h-8 w-12 p-2 text-center text-black"
        />
        <button className="rounded-md bg-[#EEEFEF] p-2">
          <img
            className="h-4 w-4"
            src={
              nextDisabled ? "/icons/right-gray.png" : "/icons/right-black.png"
            }
            alt="prev"
          />
        </button>
      </div>
      of {totalPages}
    </div>
  );
};

export default Pagination;
