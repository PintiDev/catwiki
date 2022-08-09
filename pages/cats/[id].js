import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fetchCatDetail from "../../helpers/fetchCatDetail";
import CatStatBar from "../../components/CatStatBar";
import Image from "next/image";
import fetchOtherCatImages from "../../helpers/fetchOtherCatImages";
const CatDetail = () => {
  //! Router
  const router = useRouter();
  const [catDetail, setCatDetail] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetchCatDetail(router.query.id).then((data) => {
      setCatDetail(data[0]);
    });
    fetchOtherCatImages(router.query.id).then((images) => {
      const urls = [];
      images.forEach((image) => {
        urls.push(image.url);
      });
      setImages(urls);
    });
  }, [router.query.id]);
  return catDetail ? (
    <main className="w-full min-h-[calc(100vh-4rem)]  sm:px-10 px-3">
      <article className="sm:h-[50rem] w-full flex justify-around sm:flex-row flex-col">
        <div className="  h-full flex justify-center">
          <div className="relative sm:mb-0 mb-5 sm:h-80 sm:w-80 h-[15rem] w-[15rem]  rounded-3xl overflow-hidden ">
            <Image
              src={catDetail.url}
              layout="fill"
               objectFit="cover"
              placeholder="blur"
              blurDataURL={"/cat_default_image.webp"}
            />
          </div>
        </div>
        <div className=" sm:w-1/2  h-full  flex-col gap-y-6 flex overflow-hidden ">
          <h1 className="text-3xl font-semibold sm:w-auto w-full ">
            {catDetail.breeds[0].name}
          </h1>
          <h2 className=" antialiased text-lg  ">
            {catDetail.breeds[0].description}
          </h2>
          <p>
            <strong>Temperament:</strong> {catDetail.breeds[0].temperament}
          </p>
          <p>
            <strong>Origin:</strong> {catDetail.breeds[0].origin}
          </p>
          <p>
            <strong>Life Span:</strong> {catDetail.breeds[0].life_span} years
          </p>
          <CatStatBar
            statName="AdaptAbilty"
            stat={catDetail.breeds[0].adaptability}
          />
          <CatStatBar
            statName="Affection Level"
            stat={catDetail.breeds[0].affection_level}
          />

          <CatStatBar
            statName="Child Friendly"
            stat={catDetail.breeds[0].child_friendly}
          />
          <CatStatBar statName="Grooming" stat={catDetail.breeds[0].grooming} />
          <CatStatBar
            statName="Intelligence"
            stat={catDetail.breeds[0].intelligence}
          />
          <CatStatBar
            statName="Health Issues"
            stat={catDetail.breeds[0].health_issues}
          />
          <CatStatBar
            statName="Social Needs"
            stat={catDetail.breeds[0].social_needs}
          />
          <CatStatBar
            statName="Stranger Friendly"
            stat={catDetail.breeds[0].stranger_friendly}
          />
        </div>
      </article>
      <article>
        <h2 className="text-3xl font-semibold mb-10 ">Other Photos</h2>
        <main className="grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-2 grid-rows-4 place-items-center gap-y-6">
          {images &&
            images.map((image, index) => (
              <div className="sm:h-[16rem] sm:w-[16rem] h-[9rem] w-[9rem]  relative overflow-hidden rounded-3xl">
                <Image
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/cat_default_image.webp"
                />
              </div>
            ))}
        </main>
      </article>
    </main>
  ) : (
    <div className="h-[50rem] flex justify-center">
      <img src="/ecilipse-loading.svg" className="w-1/2 h-1/2" />
    </div>
  );
};

export default CatDetail;
