import type { NextPage } from "next";

type MenuBarProps = {
  className?: string;
  active: string;
};

const MenuBar: NextPage<MenuBarProps> = ({ className, active }) => {
  return (
    <div className={`${className} mt-8 flex justify-between items-center w-full`}>
      <div className="flex text-xl font-medium">
        <span className="mx-3 cursor-pointer">Latest</span>
        <span className="mx-3 cursor-pointer">Popular</span>
        <span className="mx-2">|</span>
        <span className="mx-3 cursor-pointer text-orange">Premium</span>
        <span className="mx-3 cursor-pointer text-blue">Free</span>
      </div>
      <div className="flex">
        <img
          src="/icons/filter.png"
          alt="filter"
          className="h-8 w-8 mx-2 cursor-pointer"
        />
        <img
          src="/icons/bookmarks.png"
          alt="bookmark"
          className="h-8 w-8 mx-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MenuBar;
