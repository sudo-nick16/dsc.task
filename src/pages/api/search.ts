import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_KEY } from "../../constants";
import buildQuery from "../../utils/buildQuery";
import fetchCards from "../../utils/fetchCards";

type Data =
  | {
      error?: string;
    }
  | {
      cards: card[];
      totalPages: number;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query);
  const queries = buildQuery(req.query as { [key in string]: string });
  console.log(queries);

  const url = `https://pixabay.com/api/?key=${API_KEY}&${queries}&min_height=300&min_width=300&per_page=10&order=popular`;
  const { cards, totalPages } = await fetchCards(url);
  res.status(200).json({ cards, totalPages });
}
