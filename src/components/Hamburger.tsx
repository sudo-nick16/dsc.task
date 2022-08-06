import type { NextPage } from "next";

type HamburgerProps = {
  className?: string;
  setActive: (active: boolean) => void;
  active: boolean;
};

const Hamburger: NextPage<HamburgerProps> = ({ active, setActive, className }) => {
  return (
    <div
      onClick={() => setActive(!active)}
      className={`${className} block xl:hidden c-hamburger cursor-pointer c-hamburger--collapse p-2 rounded-md  ${
        active && "active"
      }`}
    >
      <div className="c-hamburger-inner bg-blue">
        <span className="c-hamburger-bar"></span>
        <span className="c-hamburger-bar"></span>
        <span className="c-hamburger-bar"></span>
      </div>
    </div>
  );
};

export default Hamburger;
