import React from "react";
import NextLink from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
const Link = ({ href, children, isHidden }) => {
  return (
    <NextLink href={href}>
      <a
        className={`uppercase font-semibold ${
          isHidden ? "hidden" : "inline-flex"
        } items-center  justify-start gap-x-1 group `}
      >
        <p>{children}</p>
        <BsArrowRightShort
          size={23}
          className=" group-hover:translate-x-[2px] transition-transform"
        />
      </a>
    </NextLink>
  );
};

export default Link;
