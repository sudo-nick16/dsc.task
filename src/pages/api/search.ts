// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_KEY } from "../../constants";
import buildQuery from "../../utils/buildQuery";

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
  try {
    const { data } = await axios.get(url);
    const cards: card[] = data.hits.map((item: any) => {
      return {
        url: item.webformatURL,
        premium: false,
        title: item.tags.split(",")[0],
        type: item.type,
        hdUrl: item.largeImageURL,
      };
    });
    const totalPages = Math.ceil(data.totalHits / 10);
    res.status(200).json({ cards, totalPages });
  } catch (err: any) {
    console.log("Server Error");
    res.status(500).json({ error: "Something Broke" });
  }
}
