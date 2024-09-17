import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AcMechanic = () => {
  return (
    <div className="w-full p-10">
      <div className="w-full flex justify-start">
        <h1 className="font-sans font-bold text-4xl">Mechanic</h1>
      </div>
      <div className="w-11/12">
        <div className="w-1/3"></div>
        <div className="w-8/12"></div>
      </div>
      <div className="w-full flex justify-end">
        <button className="border-b-2 font-bold flex items-center">
          Show More <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default AcMechanic;
