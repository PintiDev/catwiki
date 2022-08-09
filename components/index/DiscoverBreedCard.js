import React from "react";
import Link from "next/link";
import Image from "next/image";

const DiscoverBreedCard = ({ cat }) => {
  return (
    <Link href={`/cats/${cat.id}`}>
      <a>
        <div className=" sm:w-[18rem]  h-[10rem] w-[9rem] sm:h-[15rem] flex flex-col gap-y-3 ">
          <div className="relative flex-shrink-0  w-full h-full rounded-3xl overflow-hidden">
            <Image
              src={cat.image?.url || "/image-not-found.webp"}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={"/cat_default_image.webp"}
            />
          </div>
          <h2 className="font-semibold text-lg sm:block hidden">{cat.name}</h2>
        </div>
      </a>
    </Link>
  );
};

export default DiscoverBreedCard;
