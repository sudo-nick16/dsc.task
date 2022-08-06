import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={`w-full`}>
        <Head>
          <title>SudoNick - DSC Task</title>
          <link rel="icon" href="/logo.png" />
          <meta name="description" content="Nikit - DSC Task" />
          <link rel="icon" href="/sudonick.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
