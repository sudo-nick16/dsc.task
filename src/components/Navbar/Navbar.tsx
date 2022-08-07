import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "./Hamburger";
import MoreDropDown from "./MoreDropDown";
import SocialIcon from "./SocialIcon";

type NavbarProps = {
  className?: string;
};

const Navbar: NextPage<NavbarProps> = ({ className = "" }) => {
  const navItems = [
    { name: "Vectors", url: "/vectors" },
    { name: "Photos", url: "/photos" },
    { name: "PSD", url: "/psd" },
    { name: "Video", url: "/video" },
  ];
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div
      className={`${className} sticky z-50 top-0 flex w-full backdrop-blur-xl`}
    >
      <div className="flex w-full bound-container items-center py-3 sm:py-6 px-3 sm:px-6 relative">
        <Hamburger setActive={setShowSidebar} active={showSidebar} />
        <Link href={"/"}>
          <img
            src="logo.png"
            className="cursor-pointer h-10 w-10 sm:h-12 sm:w-12 absolute left-1/2 -translate-x-1/2 xl:static xl:translate-x-0"
            alt="sudopik_logo"
          />
        </Link>
        <div
          className={` ${
            !showSidebar && "-translate-x-full"
          } xl:translate-x-0 flex flex-col items-start fixed top-0 left-0 h-screen shadow-2xl w-72 bg-[#fff] xl:shadow-none xl:w-auto xl:items-center xl:ml-4 xl:bg-[rgba(0,0,0,0)] xl:h-auto text-black xl:static xl:flex-row s-transition`}
        >
          <Hamburger
            className="my-3 sm:my-6 ml-4"
            setActive={setShowSidebar}
            active={showSidebar}
          />
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.url}>
                <a onClick={() => setShowSidebar(false)} className={`nav-link`}>
                  {item.name}
                </a>
              </Link>
            );
          })}
          <MoreDropDown
            options={[
              {
                option: "Illustrations",
                link: "/illustrations",
              },
              {
                option: "Stickers",
                link: "/stickers",
              },
            ]}
            callback={() => setShowSidebar(false)}
            className="nav-link"
          />
        </div>
        <div className="flex ml-auto">
          <button
            className="px-3 sm:px-5 transition-all font-semibold duration-150 py-2 sm:py-3 border border-gray hover:border-black text-sm sm:text-base text-gray hover:text-black hover:shadow-md rounded-md"
            onClick={() => {}}
          >
            + Submit
          </button>
          <SocialIcon
            href="https://www.linkedin.com/in/sudo-nick/"
            src="/icons/gmail.png"
            className="p-2 ml-10 hidden xl:block"
          />
          <SocialIcon
            href="https://www.instagram.com/sudo_nick/"
            src="/icons/facebook.png"
            className="mx-3 hidden xl:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
