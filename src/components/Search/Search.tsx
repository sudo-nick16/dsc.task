import type { NextPage } from "next";
import { useState } from "react";
import { useAppContext } from "../../context/state";
import SearchDropDown from "./SearchDropDown";
import axios from "axios";
import searchHandler from "../../utils/searchHandler";

type SearchProps = {
  className?: string;
};

const Search: NextPage<SearchProps> = ({ className = "" }) => {
  const options = ["Vector", "Photo", "Illustration", "All"];
  const [choice, setChoice] = useState(options[0]);
  const [search, setSearch] = useState("");

  const { state, setState } = useAppContext()!;

  const searchButtonHandler = () => {
    setState((curr: any) => ({
      ...curr,
      cards: [],
      search: search,
      imageType: choice,
    }));
    searchHandler({
      state: {
        ...state,
        cards: [],
        search: search,
        imageType: choice,
      },
      setState,
    });
  };

  return (
    <div
      className={`${className} mt-4 py-2 mb-9 flex bg-[#fff] px-2 rounded-lg items-center w-[90%] sm:w-[36rem]`}
    >
      <SearchDropDown
        options={options}
        setValue={setChoice}
        value={choice}
        className=""
      />
      <input
        type="text"
        value={search}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchButtonHandler();
          }
        }}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="outline-none mx-1 px-2 sm:mx-3 w-[82%] sm:w-[85%] text-black text-sm sm:text-base"
      />
      <img
        onClick={() => searchButtonHandler()}
        src="/icons/search.png"
        className="h-5 w-5 sm:h-6 sm:w-6 mr-4 cursor-pointer hover:scale-105 s-transition"
        alt=""
      />
    </div>
  );
};

export default Search;

export const getStaticProps = async () => {};
