import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AppContext = createContext<GlobalState | null>(null);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<InitialState>({
    cards: [],
    currentPage: 1,
    totalPages: 1,
    search: "",
    imageType: "all",
  });

  useEffect(() => {
    console.log(state);
  }, [state, setState]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
