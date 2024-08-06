import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IoCartSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { findProper } from "../Redux/Slice/FindProperty";
import { useParams } from "react-router-dom";

const GameProperties = () => {
  const param = useParams();

  const opts = {
    height: "490",
    width: "874",
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 1,
      mute: 1,
      loop: 1,
      disablekb: 1,
    },
  };

  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findProper({ id: param.id }));
  }, []);

  const GameData = useSelector((state) => state.find.data);

  if (GameData != null) {
    return (
      <section className="p-4 ">
        <h1 className="font-extrabold text-5xl">{GameData.name}</h1>
        <div className="flex gap-3">
          <div className="w-[874px] h-[560px] mt-10 bg-black">
            <Carousel
              className="text-center"
              thumbWidth={50}
              dynamicHeight={true}
              showStatus={false}
              showIndicators={false}
            >
              <div className="h-max ">
                <YouTube videoId={GameData.video} opts={opts} />
                <img
                  src={`images/gameImg/${GameData.videoLogo}`}
                  className=" w-[844px] "
                />
              </div>
              {GameData.images.map((img) => {
                console.log(img);

                return (
                  <img src={`images/gameImg/${img}`} className="w-max h-max" />
                );
              })}
            </Carousel>

            <div className="text-lg mt-12">
              <p className="font-semibold">{GameData.overview}</p>
              <>
                <p className="mt-8 mb-2">Genres</p>
                <p className="bg-stone-400 w-max px-3 rounded-sm text-base">
                  {GameData.genres}
                </p>
              </>

              <p className="mt-12 ">
                {show === true
                  ? GameData.description.slice(0, 510)
                  : GameData.description.slice(0, GameData.description.length)}
              </p>

              <p
                onClick={() => setShow(!show)}
                className="text-blue-700 font-semibold flex text-center items-center gap-3 mb-12"
              >
                Show{" "}
                {show === true ? (
                  <>
                    More <IoIosArrowDown className="text-2xl" />
                  </>
                ) : (
                  <>
                    Less <IoIosArrowUp className="text-2xl" />
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="w-80 flex mt-20 flex-col gap-2">
            <img
              className="w-max h-48"
              src={`images/gameLogo/${GameData.logo}`}
            />
            <span className="font-semibold px-2 bg-stone-300 w-max rounded-md mt-3">
              {GameData.type}
            </span>
            <span className="font-bold">${GameData.price}</span>
            <button className="bg-blue-600 py-2 text-white font-bold text-xl rounded-md hover:bg-blue-500">
              Buy Now
            </button>
            <button className="bg-stone-500 py-2 text-white font-bold text-xl rounded-md hover:bg-stone-400 h-12 flex justify-center items-center gap-3">
              <IoCartSharp /> Add to Cart
            </button>
            <button className="bg-stone-500 py-2 text-white font-bold text-xl rounded-md hover:bg-stone-400 h-12 flex justify-center items-center gap-3">
              <MdFavorite /> Wishlist
            </button>
            <div className="gap-4 flex font-medium text-lg border-b-[1px] border-stone-500 pb-2 mt-2">
              <span className="text-stone-800">Developer</span>
              <span className="font-semibold">{GameData.developer}</span>
            </div>
            <div className="gap-4 flex font-medium text-lg border-b-[1px] border-stone-500 pb-2 mt-2">
              <span className="text-stone-800">Publisher</span>
              <span className="font-semibold">{GameData.publisher}</span>
            </div>
            <div className="gap-4 flex font-medium text-lg border-b-[1px] border-stone-500 pb-2 mt-2">
              <span className="text-stone-800">Release Date</span>
              <span className="font-semibold">{GameData.release}</span>
            </div>
            <div className="justify-between flex font-medium text-lg border-b-[1px] border-stone-500 pb-2 mt-2">
              <span className="text-stone-800">Platform</span>
              <img className="w-6 h-6" src={`images/${GameData.os}`} />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default GameProperties;
