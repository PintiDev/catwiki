import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import fetchSearch from "../../helpers/fetchSearch";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiErrorAlt } from "react-icons/bi";
const Search = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (input) {
      fetchSearch(input).then((data) => {
        setResult(data);
        setLoading(false);
      });
    } else {
      setResult([]);
    }
  }, [input]);
  const resultMenuVariants = {
    open: { y: 140, opacity: 1 },
    close: { y: -10, opacity: 0 },
  };
  return (
    <label className="  relative flex  items-center  bg-white text-themeBlack rounded-full sm:px-5 px-2  sm:h-14 h-8 w-[80%] ">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          if (e.target.value) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        }}
        type={"text"}
        className="w-full h-full outline-none   sm:text-base text-xs  bg-transparent placeholder:text-themeBlack "
        placeholder="Enter Your Breed"
      />
      <AiOutlineSearch size={23} />
      <motion.div
        variants={resultMenuVariants}
        animate={isOpen ? "open" : "close"}
        className="sm:absolute fixed left-2 sm:h-48 h-full top-[6rem] z-[9999] bg-white  p-2 py-4 w-[95%]    rounded-2xl "
      >
        <div className="w-full h-full  overflow-auto">
          {result.length == 0 ? (
            loading ? (
              <div className="w-full h-full flex items-center justify-center text-xl font-semibold">
                <img src="/ecilipse-loading.svg" className="h-20 w-20" />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full w-full">
                <div className="flex items-center font-semibold  gap-x-3 text-2xl justify-center">
                  <p>Can't find Anything</p>
                  <BiErrorAlt />
                </div>
              </div>
            )
          ) : (
            result.map((cat, indeks) => (
              <Link href={`cats/${cat.id}`} key={indeks}>
                <a className="h-12 w-full flex rounded-lg items-center px-2 hover:bg-gray-200">
                  {cat.name}
                </a>
              </Link>
            ))
          )}
        </div>
      </motion.div>
    </label>
  );
};

export default Search;
