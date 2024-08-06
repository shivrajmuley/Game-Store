import React, { useState } from "react";
import Bannerdata from "../../public/data/BannerData";
const HomeBanner = () => {
  const [num, setNum] = useState(0);

  setTimeout(() => {
    setNum(num + 1);
  }, 5000);
  if (num == 4) {
    setNum(0);
  }
  return (
    <div className=" flex">
      <div className=" flex ml-32 flex-col flex-nowrap overflow-hidden h-[415px]  px-12 w-[1200px]   pt-28">
        <div className="flex  flex-row w-max h-max">
          <img
            src={`images/${Bannerdata[num].bg}`}
            className="w-[900px] object-cover object-bottom rounded-3xl h-[303px] "
          />
          <img
            src={`images/${Bannerdata[num].character}`}
            className="h-[440px] relative bottom-[114px] right-56"
          />
        </div>
        <div className="flex w-6/12 absolute flex-col text-white  right-60 bottom-[330px]">
          <h2 className="text-5xl font-bold">{Bannerdata[num].gameName}</h2>
          <p className="text-lg mt-4">{Bannerdata[num].overview}</p>
          <p className="text-lg mt-4 font-semibold">
            Starting at ${Bannerdata[num].price}
          </p>
          <div className="mt-4">
            <button className="border-[1px] p-2 rounded-md font-semibold ">
              Buy Now
            </button>
          </div>
        </div>

<>
<div className="w-[130px] left-[650px] h-1 bg-gray-400 absolute top-[506px] "> </div>
{num == 0 ? <div className="w-[130px] left-[650px] h-1 bg-purple-700 absolute top-[506px] animate-infinite-scroll flex"> </div> : ""}
</>
<>
<div className="w-[130px] left-[800px] h-1 bg-gray-400 absolute top-[506px] "> </div>
{num == 1 ? <div className="w-[130px] left-[800px] h-1 bg-purple-700 absolute top-[506px] animate-infinite-scroll flex"> </div> : ""}
</>
<>
<div className="w-[130px] left-[950px] h-1 bg-gray-400 absolute top-[506px] "> </div>
{num == 2 ? <div className="w-[130px] left-[950px] h-1 bg-purple-700 absolute top-[506px] animate-infinite-scroll flex"> </div> : ""}
</>
<>
<div className="w-[130px] left-[1100px] h-1 bg-gray-400 absolute top-[506px] "> </div>
{num === 3 ? <div className="w-[130px] left-[1100px] h-1 bg-purple-700 absolute top-[506px] animate-infinite-scroll flex"> </div> : ""}
</>


      </div>
    </div>
  );
};

export default HomeBanner;
