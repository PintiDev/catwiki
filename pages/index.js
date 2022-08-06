import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Search from "../components/functionals/Search";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import DiscoverBreedCard from "../components/index/DiscoverBreedCard";

const Index = ({ catBreeds }) => {
  let [slicedCatBreeds, setSlicedCatBreeds] = useState([]);
  useEffect(() => {
    let sliced = [];
    for (let index = 0; index < 4; index++) {
      sliced.push(catBreeds[Math.floor(Math.random() * catBreeds.length)]);
      setSlicedCatBreeds(sliced);
    }
  }, []);
  return (
    <main className=" w-full h-[calc(100vh-3.5rem)] ">
      {/* Section Hero 1 */}
      <article
        style={{ backgroundImage: "url('/heroimagelg.png')" }}
        className=" bg-bottom bg-cover w-full rounded-tr-[4rem] rounded-tl-[4rem] px-20 h-[30rem] flex "
      >
        <div className="w-[28%]  h-full flex flex-col justify-center items-start">
          <div className=" invert mb-2">
            <Logo width={18} height={7} />
          </div>
          <h1 className="text-white mb-10 text-2xl w-[90%]">
            Get to know more about your cat bread
          </h1>
          <Search />
        </div>
      </article>

      {/* Section Two Most Searched Breed*/}
      <article className=" w-full px-20 h-[35rem] flex  bg-themeIdk pt-10">
        <div className="flex flex-col gap-y-8 w-full">
          <h1 className="text-themeBlack  font-semibold text-2xl relative h-10">
            Most Searched Breeds
            <div className="absolute w-20 h-1 bg-themeBlack/70 bottom-1 left-0"></div>
          </h1>
          <div className="flex items-end justify-between">
            <h2 className="text-[2.5rem] leading-[3rem] font-bold tracking-wider">
              {catBreeds.length}+ Breeds For you <br /> to discover
            </h2>
            <Link href={"/"}>
              <a className="uppercase font-semibold flex items-center justify-center gap-x-1 group">
                <p>see more</p>
                <BsArrowRightShort
                  size={23}
                  className=" group-hover:translate-x-[2px] transition-transform"
                />
              </a>
            </Link>
          </div>
          <div className="h-60  w-full flex  justify-around ">
            {catBreeds &&
              slicedCatBreeds.map((cat, indeks) => (
                <DiscoverBreedCard cat={cat} key={indeks} />
              ))}
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
