import React from "react";
import Image from "next/image";

const Logo = ({ height, width }) => {
  return (
    <div className=" relative" style={{ height: `${height}rem`, width: `${width}rem` }}>
      <Image
        src={"/catwikilogo.svg"}
        layout="fill"
        placeholder="blur"
        blurDataURL="/CatwikiLogo.svg"
      />
    </div>
  );
};

export default Logo;
