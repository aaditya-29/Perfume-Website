import React from "react";
import VanillaDream from "./asset/VanillaDream.jpeg";
import CitrusBurst from "./asset/CitrusBurst.jpeg";
import MysticWoods from "./asset/MysticWoods.jpeg";
import EuphoriaBliss from "./asset/EuphoriaBliss.jpeg";

const ProductCard = () => {
  return (
    <>
      {/* Header */}
      <div className="text-center py-12 bg-white">
        <h1 className="text-4xl font-bold">Fragrance Wonderland</h1>
      </div>

      {/* Product Cards Grid */}
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pt-0 bg-peach rounded-xl ">
        {/* Card 1 */}
        <div className="bg-purple-200 rounded-3xl p-4 my-4 shadow-lg flex flex-col items-center w-full">
          <img
            src={VanillaDream}
            alt="Vanilla Dream"
            className="w-full h-full lg:h-64 object-cover rounded-3xl"
          />
          <h2 className="text-2xl font-bold mt-4 ">Vanilla Dream</h2>
          <h3 className="text-lg mt-2 font-semibold">$74.99</h3>
          <p className="text-center mt-2 font-medium text-lg">
            A sweet embrace that wraps you in warmth, perfect for cozy nights.
          </p>
          <button className="mt-4 px-6 py-3 text-lg  ease-in duration-300 font-bold border-2 border-black rounded-full transition hover:bg-purple-300 hover:border-white hover:border-2 hover:text-white">
            Buy Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-pink-200 rounded-3xl p-4 my-4 shadow-lg flex flex-col items-center w-full">
          <img
            src={CitrusBurst}
            alt="Citrus Burst"
            className="w-full h-full lg:h-64 object-cover rounded-3xl"
          />
          <h2 className="text-2xl font-bold mt-4">Citrus Burst</h2>
          <h3 className="text-lg mt-2 font-semibold">$69.99</h3>
          <p className="text-center mt-2 font-medium text-lg">
            A zesty explosion that invigorates your senses, ideal for sunny
            days.
          </p>
          <button className="mt-4 px-6 py-3 text-lg  ease-in duration-300 font-bold border-2 border-black rounded-full transition hover:bg-pink-300 hover:border-white hover:border-2 hover:text-white">
            Buy Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-200 rounded-3xl p-4 w-full my-4 shadow-lg flex flex-col items-center">
          <img
            src={MysticWoods}
            alt="Mystic Woods"
            className="w-full h-full lg:h-64 object-cover rounded-3xl"
          />
          <h2 className="text-2xl font-bold mt-4 ">Mystic Woods</h2>
          <h3 className="text-lg mt-2 font-semibold">$89.99</h3>
          <p className="text-center mt-2 font-medium text-lg">
            An earthy blend that whispers secrets of the forest, perfect for
            adventurers.
          </p>
          <button className="mt-4 px-6 py-3 text-lg  ease-in duration-300 font-bold border-2 border-black rounded-full transition hover:bg-yellow-300 hover:border-white hover:border-2 hover:text-white">
            Buy Now
          </button>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-300 rounded-3xl p-4 w-full my-4 shadow-xl flex flex-col items-center">
          <img
            src={EuphoriaBliss}
            alt="Euphoria Bliss"
            className="w-full h-full lg:h-64 object-cover rounded-3xl"
          />
          <h2 className="text-2xl font-bold mt-4">Euphoria Bliss</h2>
          <h3 className="text-lg mt-2 font-semibold">$79.99</h3>
          <p className="text-center mt-2 font-medium text-lg">
            A floral symphony that dances on your skin, leaving a trail of joy.
          </p>
          <button className="mt-4 px-6 py-3 text-lg font-bold border-2 border-black ease-in duration-300 rounded-full transition hover:bg-black-52 hover:border-white hover:border-2 hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
