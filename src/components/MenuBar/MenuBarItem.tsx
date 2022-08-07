import type { NextPage } from "next";

type MenuBarItemProps = {
  name: string;
  className?: string;
  pinged?: boolean;
};

const MenuBarItem: NextPage<MenuBarItemProps> = ({
  className = "",
  pinged = false,
  name,
}) => {
  return (
    <span
      className={`${className} menu-items  ${
        pinged ? "menu-items-pinged" : ""
      }`}
    >
      {name}
    </span>
  );
};

export default MenuBarItem;
