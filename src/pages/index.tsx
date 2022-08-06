import type { NextPage } from "next";
import CardsGrid from "../components/CardsGrid";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import Search from "../components/Search";

const Home: NextPage = () => {
  return (
    <div className="bound-container flex flex-col items-center mt-6">
      <h1 className="mt-4 sm:mt-0 leading-tight font-semibold sm:font-normal text-4xl sm:text-5xl w-fit text-center mx-10">Popular Pro Stock Vectors</h1>
      <h3 className="w-3/4 sm:w-96 font-medium text-gray text-center text-base mt-6 mb-4 mx-6">
        High quality Vectors with worry-free licensing for personal and
        commercial use.
      </h3>
      <Search />
      <MenuBar newAvailable="Latest" />
      <CardsGrid />
      <Footer />
    </div>
  );
};

export default Home;
