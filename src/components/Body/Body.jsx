import React from "react";
import Bitcoin from "../Bitcoin/Bitcoin";
import Trending from "../Trending.jsx";
import AboutBitcoin from "../AboutBitcoin.jsx";
import Team from "../Team.jsx";
import Tokenomics from "../Tokenomics.jsx";


const Body = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-200 p-8">
      {/* Left Column */}
      <div className="col-span-1 md:col-span-2 mb-8 md:mb-0">
        <div className="ml-16 mt-16 rounded-xl">
          {/* bitcoin */}
          <div className="rounded-2xl">
            <Bitcoin />
          </div>
          {/* about bitcoin  */}
          <div className="flex mt-5 ">
            <AboutBitcoin />
          </div>
          {/* tokenomics */}
          <div className="bg">
            <Tokenomics></Tokenomics>
          </div>
          {/* team */}
          <div className="mt-5">
            <Team />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-1 mx-4">
        {/* First Section */}
        <div className="flex flex-col text-white mr-8">
          <div className="mt-16 rounded-xl bg-blue-600 align-middle flex-col px-8">
            <div className="m-2 justify-center text-3xl">
              <h1 className="text-center p-8 font-sans">
                Get Started with Koinx for FREE
              </h1>
            </div>
            <div className="px-8">
              <p className="text-center">
                With our range of features that you can equip for free, KoinX
                allows you to be more educated and aware of your tax reports,
              </p>
            </div>
            <div className="flex justify-center align-middle m-5 mt-5">
              <img
                src="https://i.ibb.co/fnyrVCH/images-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="flex align-middle justify-center mb-8">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-10 rounded-lg border border-gray-300 mb-4">
                Get Started for FREE →
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <Trending />



      </div>
    </div>
  );
};

export default Body;
