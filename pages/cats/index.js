import React, { useEffect, useState } from "react";
import MostSearchedCatBox from "../../components/MostSearchedCatBox";

const index = ({ cats }) => {
  const [mostSearched, setMostSearched] = useState(null);
  useEffect(() => {
    if (cats) {
      setMostSearched(cats.slice(0, 10));
    }
  }, []);
  return mostSearched ? (
    <main className="min-h-[calc(100vh-5rem)]  rounded-3xl px-10">
      <h1 className="text-3xl  font-semibold tracking-wider my-10">
        Top 10 most searched breeds
      </h1>
      <div className="space-y-10">
        {mostSearched.map((cat, index) => (
          <MostSearchedCatBox
            key={index}
            name={cat.name}
            catId={cat.id}
            desc={cat.description}
            imageUrl={cat.image.url}
            itemKey={index + 1}
          />
        ))}
      </div>
    </main>
  ) : (
    <div className="h-[50rem] flex justify-center ">
      <img src="/ecilipse-loading.svg" className="w-1/2 h-1/2" />
    </div>
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
      cats: res,
    },
  };
};
export default index;
