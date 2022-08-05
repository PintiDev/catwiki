import React from "react";
import Link from "next/link";
import Image from "next/image";

const DiscoverBreedCard = ({cat}) => {
  return (
    <Link href={`/cats/${cat.id}`}>
      <a>
        <div className=" w-[18rem] h-full flex flex-col gap-y-3 ">
          <div className="relative flex-shrink-0  w-full h-full rounded-3xl overflow-hidden">
            <Image
              src={cat.image?.url}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={cat.image?.url}
            />
          </div>
          <h2 className="font-semibold text-lg">{cat.name}</h2>
        </div>
      </a>
    </Link>
  );
};

export default DiscoverBreedCard;
