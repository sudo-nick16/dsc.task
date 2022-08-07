import type { NextPage } from "next";
import { useAppContext } from "../../context/state";
import Card from "./Card";

type CardsGridProps = {
  className?: string;
};

const CardsGrid: NextPage<CardsGridProps> = ({ className = "" }) => {
  const { state } = useAppContext()!;
  return (
    <div
      className={`${className} w-full xxs:my-2 p-6 sm-p-8 grid-flow-row grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8`}
    >
      {state.cards.slice((state.currentPage-1)*10,(state.currentPage)*10).map((card, index) => {
        return <Card className="col-span-1" key={index} card={card} />;
      })}
    </div>
  );
};

export default CardsGrid;
