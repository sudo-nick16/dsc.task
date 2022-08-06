import type { NextPage } from "next";
import Link from "next/link";

type SocialIconProps = {
  className?: string;
  href: string;
  src: string;
};

const SocialIcon: NextPage<SocialIconProps> = ({ href, className, src }) => {
  return (
    <Link href={href}>
      <a target="_blank" className={``}>
        <div
          className={`${className} rounded-full h-10 w-10 shadow-xl shadow-gray bg-[#fff] s-transition hover:-translate-y-1`}
        >
          <img src={src} alt="" className="h-full w-full" />
        </div>
      </a>
    </Link>
  );
};

export default SocialIcon;
