import type { NextPage } from "next";
import CardsGrid from "../components/CardsGrid";
import MenuBar from "../components/MenuBar";
import Search from "../components/Search";

const Home: NextPage = () => {
  return (
    <div className="bound-container flex flex-col items-center mt-6">
      <h1 className="text-5xl w-fit text-center">Popular Pro Stock Vectors</h1>
      <h3 className="w-fit font-medium text-gray text-center text-base mt-6 mb-4">
        High quality Vectors with worry-free licensing for <br /> personal and
        commercial use.
      </h3>
      <Search />
      <MenuBar active="latest" />
      <CardsGrid />
    </div>
  );
};

export default Home;
