import React from "react";
// import "./Partner.css";

import harleyDavidson from "./partners-logo/harleyDavidson.jpeg";
import house from "./partners-logo/house.jpeg";
import LV from "./partners-logo/LV.jpeg";
import nashile from "./partners-logo/nashile.jpeg";
import redbull from "./partners-logo/redbull.jpeg";
import sureCoffee from "./partners-logo/sureCoffee.jpeg";

const Partners = () => {
  return (
    <div className="font-serif mb-3 bg-white">
      <h1 className="p-4 font-bold  text-center sm:text-xl md:text-2xl lg:text-4xl">
        Our Fragrance Partners
      </h1>
      <div className="mx-1 grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <img
          className=" rounded-3xl cursor-pointer w-52 my-4 h-32"
          src={harleyDavidson}
          alt="harleyDavidson"
        />
        <img
          className=" rounded-3xl cursor-pointer w-52 my-4 h-32"
          src={house}
          alt="house"
        />
        <img
          className=" rounded-3xl cursor-pointer w-52 my-4 h-32"
          src={LV}
          alt="LV"
        />
        <img
          className=" rounded-3xl cursor-pointer w-52 my-4 h-32"
          src={nashile}
          alt="nashile"
        />
        <img
          className=" rounded-3xl cursor-pointer w-52 my-4 h-32"
          src={redbull}
          alt="redbull"
        />
        <img
          className=" rounded-3xl cursor-pointer w-52 my-4 h-32"
          src={sureCoffee}
          alt="sureCoffee"
        />
      </div>
    </div>
  );
};

export default Partners;
