import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Search from "../components/functionals/Search";
import Link from "../components/index/Link";
import DiscoverBreedCard from "../components/index/DiscoverBreedCard";
import Image from "next/image";

const Index = ({ catBreeds }) => {
  let [slicedCatBreeds, setSlicedCatBreeds] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    let sliced = [];
    for (let index = 0; index < 4; index++) {
      sliced.push(catBreeds[Math.floor(Math.random() * catBreeds.length)]);
      setSlicedCatBreeds(sliced);
    }
    if (window.innerHeight >= 375 || window.innerHeight < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  return (
    <main className=" w-full  min-h-[calc(100vh-3.5rem)] ">
      {/* Section Hero 1 */}
      <article
        style={{
          backgroundImage: `url(${
            isMobile ? "/heroimagemd.png" : "/heroimagelg.png"
          })`,
        }}
        className=" bg-bottom bg-cover  bg-no-repeat  rounded-tr-[4rem] rounded-tl-[4rem] sm:px-20 px-10 sm:h-[30rem] h-[12rem]  flex "
      >
        <div className="  h-full flex flex-col w-1/2 sm:w-[28%] justify-center items-start">
          <div className=" invert sm:mb-2">
            <Logo width={isMobile ? 6 : 14} height={isMobile ? 3 : 10} />
          </div>
          <h1 className="text-white sm:mb-10 sm:text-2xl text-xs mb-4">
            Get to know more about your cat bread
          </h1>
          <Search />
        </div>
      </article>

      {/* Section Two Most Searched Breed*/}
      <article className=" w-full sm:px-20 px-8 h-[35rem] flex  bg-themeIdk sm:pt-10 pt-4   ">
        <div className="flex flex-col sm:gap-y-8 gap-y-4 w-full">
          <h1 className="text-themeBlack  font-semibold text-2xl relative h-10">
            Most Searched Breeds
            <div className="absolute w-20 h-1 bg-themeBlack/70 bottom-1 left-0"></div>
          </h1>
          <div className="flex items-end justify-between">
            <h2 className="sm:text-[2.5rem] text-lg sm:leading-[3rem] font-bold tracking-wider">
              {catBreeds.length}+ Breeds For you to discover
            </h2>
            <Link href={"/cats"} isHidden={true}>
        See More
            </Link>
          </div>
          <div className="grid sm:grid-cols-4 place-items-center sm:grid-rows-1 gap-x-10 grid-rows-2 grid-cols-2  sm:h-60 h-96 ">
            {catBreeds &&
              slicedCatBreeds.map((cat, indeks) => (
                <DiscoverBreedCard cat={cat} key={indeks} />
              ))}
          </div>
        </div>
      </article>
      {/* Section 3 Why should you have a cat */}
      <article className="h-[35rem] hidden  px-28  justify-between ">
        <div className="w-1/2h h-full flex justify-center flex-col gap-y-10  ">
          <div className="relative text-themeBlack ">
            <h1 className="text-5xl font-bold tracking-wider leading-[3rem]">
              Why should you <br />
              have a cat ?
            </h1>
            <div className="absolute -top-3 left-0 h-1 w-1/4 bg-themeBlack"></div>
          </div>
          <p className="font-semibold text-lg">
            Having a cat around you can actually trigger the <br /> relase of
            calming chemicals in your body which <br /> lower your stress and
            anxiety levels
          </p>
          <Link href={"/nemne"}>read more</Link>
        </div>
        <div className="grid w-1/2 grid-cols-2 grid-rows-2  gap-x-5 py-6">
          <div className="w-[19rem] hover:scale-[1.02] transition-transform cursor-pointer  self-start col-start-1 row-start-1 h-[11rem] relative overflow-hidden rounded-2xl">
            <Image
              src={"/image 2.png"}
              layout="fill"
              placeholder="blur"
              blurDataURL="/image 2.png"
              objectFit="cover"
            />
          </div>
          <div className="w-[15rem]  hover:scale-[1.02] transition-transform cursor-pointer col-start-2   h-[24rem]  relative overflow-hidden rounded-2xl">
            <Image
              src={"/image 3.png"}
              layout="fill"
              placeholder="blur"
              blurDataURL="/image 2.png"
              objectFit="cover"
            />
          </div>
          <div className=" w-[13rem] hover:scale-[1.02] transition-transform cursor-pointer   h-[20rem]  col-start-1 row-start-2   justify-self-end  self-end     relative overflow-hidden rounded-2xl">
            <Image
              src={"/image 1.png"}
              layout="fill"
              placeholder="blur"
              blurDataURL="/image 2.png"
              objectFit="cover"
            />
          </div>
        </div>
      </article>
    </main>
  );
};
export const getStaticProps = async (ctx) => {
  const req = await fetch("https://api.thecatapi.com/v1/breeds", {
    method: "GET",
    headers: {
      "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const res = await req.json();
  return {
    props: {
      catBreeds: res,
    },
  };
};
export default Index;
