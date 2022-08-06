import type { NextPage } from "next";
import CardsGrid from "../components/CardGrid/CardsGrid";
import Footer from "../components/PageEnd/PageEnd";
import Search from "../components/Search/Search";
import { useAppContext } from "../context/state";
import axios from "axios";
import { useEffect } from "react";
import { API_KEY } from "../constants";
import { cards as Cards } from "../backupData";
import MenuBar from "../components/MenuBar/MenuBar";

type HomeProps = {
  cards: card[];
  totalPages: number;
};

const Home: NextPage<HomeProps> = ({ cards, totalPages }) => {
  const { setState } = useAppContext()!;
  useEffect(() => {
    setState((curr: any) => ({
      ...curr,
      cards,
      totalPages,
    }));
  }, []);
  return (
    <div className="bound-container flex flex-col items-center mt-6">
      <h1 className="mt-4 sm:mt-0 leading-tight font-semibold sm:font-normal text-4xl sm:text-5xl w-fit text-center mx-10">
        Popular Pro Stock Vectors
      </h1>
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

export const getStaticProps = async () => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=&image_type=photo&min_height=300&min_width=300&page=1&per_page=10&order=popular&editors_choice=true&category=backgrounds&safesearch=true`;
  var cards: card[] = Cards;
  var totalPages = 1;
  try {
    const { data } = await axios.get(url);
    cards = data.hits.map((item: any) => {
      return {
        url: item.webformatURL,
        premium: false,
        title: item.tags.split(",")[0],
        type: item.type,
        hdUrl: item.largeImageURL,
      };
    });
    totalPages = Math.ceil(data.totalHits / 10);
  } catch (e: any) {
    console.log("Error: ", e.message);
  }
  return {
    props: {
      cards,
      totalPages,
    },
    revalidate: 10,
  };
};
