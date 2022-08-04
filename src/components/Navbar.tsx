import type { NextPage } from "next";
import Link from "next/link";
import SocialIcon from "./SocialIcon";

type NavbarProps = {};

const Navbar: NextPage<NavbarProps> = ({}) => {
  return (
    <div className="flex w-full py-9 px-6">
      <div className="flex w-full bound-container items-center">
        <img src="logo.png" className="h-12 w-12" alt="" />
        <div className="flex items-center ml-4">
          <Link href={"/vectors"}>
            <a className="nav-link">Vectors</a>
          </Link>
          <Link href={"/photos"}>
            <a className="nav-link">Photos</a>
          </Link>
          <Link href={"/psd"}>
            <a className="nav-link">PSD</a>
          </Link>
          <Link href={"/video"}>
            <a className="nav-link">Video</a>
          </Link>
          <div className="mx-4 font-semibold">
            <span className="flex items-center">
              More{" "}
              <img
                src="icons/down-filled-arrow.png"
                alt=""
                className="h-2 w-2 ml-2"
              />
            </span>
            <div>
              <p></p>
            </div>
          </div>
        </div>
        <div className="flex ml-auto">
          <button
            className="px-5 transition-all font-semibold duration-150 py-3 border border-gray hover:border-black text-md text-gray hover:text-black hover:shadow-md rounded-md"
            onClick={() => {}}
          >
            + Submit
          </button>
          <SocialIcon href="" src="/icons/gmail.png" className="p-2 ml-10" />
          <SocialIcon href="" src="/icons/facebook.png" className="mx-3" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
