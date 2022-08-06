import type { NextPage } from "next";
import Card from "./Card";

type CardsGridProps = {
  className?: string;
};

const CardsGrid: NextPage<CardsGridProps> = ({ className }) => {
  const cards = [
    {
      url: "/images/cards/dog.jpg",
      premium: true,
      title: "Dog illustration",
    },
    {
      url: "/images/cards/astronaut-riding.jpg",
      premium: true,
      title: "Astronaut riding",
    },
    {
      url: "/images/cards/rockstar-guitarist.jpg",
      premium: false,
      title: "Rockstar guitarist",
    },
    {
      url: "/images/cards/mountain.jpg",
      premium: true,
      title: "Mountain",
    }
  ];
  return (
    <div
      className={`${className} bound-container xxs:my-2 p-6 sm-p-8 grid grid-cols-2 sm:grid-cols-3 grid-flow-row gap-6 md:gap-8`}
    >
      {cards.map((card, index) => {
        return <Card key={index} data={card} />;
      })}
    </div>
  );
};

export default CardsGrid;
