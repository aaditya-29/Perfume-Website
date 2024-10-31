import React from "react";
import backgroundvideo from "./background.mp4";

const Background = () => {
  return (
    <section className="relative h-screen flex justify-star items-end overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1]">
        <source src={backgroundvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for fading effect */}
      <div className="absolute inset-0 bg-black-52 opacity-15 z-0"></div>

      {/* Content Section */}
      <div className="text-left text-lightPeach mb-16 z-0 lg:mb-32 ml-8">
        <h1 className="text-5xl font-bold mb-8">Scent Paradise</h1>
        <p
          className="text-3xl mb-5 text-white
        ">
          Dive into a world of fragrances that ignite your senses!
        </p>
        <button className="py-2 text-3xl font-bold border-2 px-2 border-white rounded-2xl bg-transparent text-white hover:bg-lightPeach hover:text-white transition-all hover:border-white ease-in duration-200 hover:rounded-3xl ">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Background;
