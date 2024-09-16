import { motion } from "framer-motion";
import React from "react";

const ButtonDesign = () => {
  return (
    <div className="w-48 h-20 p-1  relative flex justify-center items-center ml-40 rounded-full overflow-hidden ">
      {/* <motion.span
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        className=" absolute bg-black h-10 w-full"
      ></motion.span> */}
      <div className="bg-white w-48 h-16 rounded-full relative text-black"></div>
    </div>
  );
};

export default ButtonDesign;
