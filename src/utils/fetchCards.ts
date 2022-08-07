import axios from "axios";
import { cards } from "../backupData";

type FetchFromApiResponse = {
  cards: card[];
  totalPages: number;
};

async function fetchCards(
  state: GlobalState,
  pageNumber?: number
): Promise<void>;

async function fetchCards(url: string): Promise<FetchFromApiResponse>;

async function fetchCards(
  arg1: unknown,
  arg2?: unknown
): Promise<void | FetchFromApiResponse> {
  if (typeof arg1 === "string") {
    try {
      const { data } = await axios.get(arg1);
      const cards = data.hits.map((item: any) => {
        return {
          url: item.webformatURL,
          premium: false,
          title: item.tags.split(",")[0],
          type: item.type,
          hdUrl: item.largeImageURL,
        };
      });
      const totalPages = Math.ceil(data.totalHits / 10);
      return { cards, totalPages };
    } catch (e: any) {
      console.log("Error: ", e.message);
      return { cards: cards, totalPages: 1 };
    }
  } else if (typeof arg1 === "object") {
    const {
      state: { search, imageType },
      setState,
    } = arg1 as GlobalState;

    console.log("state", arg1);

    if (search.length < 0) {
      return;
    }
    const query = search.split(" ").join("+");
    const image_type = imageType.toLowerCase();
    const pageNo = arg2 || 1;
    try {
      const {
        data: { cards, totalPages },
      } = await axios.get(
        `/api/search/?q=${query}&page=${pageNo}&image_type=${image_type}`
      );
      setState((curr: any) => ({
        ...curr,
        cards: [...curr.cards, ...cards], // caching the cards
        totalPages,
        currentPage: pageNo,
      }));
    } catch (err) {
      alert("Something went wrong");
      console.log(err);
    }
  }
}

export default fetchCards;
