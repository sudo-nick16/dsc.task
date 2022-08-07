declare module "react-outside-click-wrapper";

type DropDownOption = { name: string; value: string };

type card = {
  url: string;
  premium: boolean;
  title: string;
  type: string;
  hdUrl: string;
};

type InitialState = {
  cards: card[] & never[];
  currentPage: number;
  totalPages: number;
  imageType: string;
  search: string;
};

type GlobalState = {
  state: InitialState;
  setState: Dispatch<SetStateAction<InitialState>>;
};
