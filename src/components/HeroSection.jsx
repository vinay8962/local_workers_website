import React from "react";
import Image1 from "../assets/Hero Section Image/auto-mechanic-working-garage-repair-service.jpg";
import Image2 from "../assets/Hero Section Image/male-electrician-works-switchboard-with-electrical-connecting-cable.jpg";
import Image3 from "../assets/Hero Section Image/man-installs-heating-system-house-checks-pipes-with-wrench.jpg";
import Image4 from "../assets/Hero Section Image/man-safety-equipment-work.jpg";

const HeroSection = () => {
  return (
    <div className="w-full md:flex h-auto py-10 border-b-2">
      <div className="md:w-1/2 w-full  flex items-center justify-center">
        <div className="w-10/12">
          <h1 className=" font-serif font-bold text-5xl my-2">Hello</h1>
          <h2 className=" font-serif font-bold text-4xl my-2">Hello World</h2>
          <p className="font-serif text-gray-600 tracking-widest my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quo
            eveniet veritatis exercitationem ad, animi officiis nam consequatur
            aspernatur quis!
          </p>
          <div className="w-full  flex justify-end">
            <button className=" w-32 border border-gray-400 p-2 rounded-sm  text-gray-600 tracking-wide">
              Join Now
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full ">
        <div className="w-10/12 grid grid-cols-2 gap-2 p-4 ">
          <div className="row-span-5 overflow-hidden rounded-lg shadow-md">
            <img
              src={Image1}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-span-1 overflow-hidden rounded-lg shadow-md">
            <img
              src={Image2}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="row-span-5 overflow-hidden rounded-lg shadow-md">
            <img
              src={Image3}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-span-1 overflow-hidden rounded-lg shadow-md">
            <img
              src={Image4}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
