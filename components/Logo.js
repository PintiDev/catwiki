import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ height, width }) => {
  return (
    <Link href={"/"}>
      <a>
        <div
          className=" relative"
          style={{ height: `${height}rem`, width: `${width}rem` }}
        >
          <Image
            src={"/catwikilogo.svg"}
            layout="fill"
            placeholder="blur"
            blurDataURL="/CatwikiLogo.svg"
          />
        </div>
      </a>
    </Link>
  );
};

export default Logo;
