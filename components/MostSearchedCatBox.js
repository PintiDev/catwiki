import Image from "next/image";
import React from "react";
import Link from "next/link";
const MostSearchedCatBox = ({ name, imageUrl, desc, itemKey, catId }) => {
  return (
    <div className="w-[85%]   flex items-center justify-between gap-x-14">
      <div className="relative h-48 w-48 flex-shrink-0  rounded-3xl overflow-hidden">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={'/cat_default_image.webp'}
        />
      </div>
      <div className="space-y-5">
        <Link href={`cats/${catId}`}>
          <a>
            <h2 className="text-3xl ">
              {itemKey}. {name}
            </h2>
          </a>
        </Link>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default MostSearchedCatBox;
