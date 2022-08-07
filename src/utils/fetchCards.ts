import axios from "axios";

const fetchCards = async (state: GlobalState, pageNumber?: number) => {
  const {
    state: { search, imageType },
    setState,
  } = state;
  console.log("state", state);

  if (search.length < 0) {
    return;
  }
  const query = search.split(" ").join("+");
  const image_type = imageType.toLowerCase();
  const pageNo = pageNumber || 1;
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
};

export default fetchCards;
