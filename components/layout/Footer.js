import React from "react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="h-24 mt-10 sm:px-24 px-8 flex items-center justify-between bg-themeBlack text-white w-full rounded-tl-[3rem] rounded-tr-[3rem]">
      <div className="invert ">
        <Logo height={3} width={6} />
      </div>
      <div className="sm:text-base text-xs sm:w-auto w-1/2  ">
        © created by
        <a
          target={"_blank"}
          className="underline hover:no-underline underline-offset-4"
          href="https://pinti.dev"
        >
          PintiDev

        </a>
        - devChallange.io 2021
      </div>
    </footer>
  );
};

export default Footer;
