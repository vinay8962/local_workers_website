import React from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const handerLink = () => {
    navigate("/register");
  };
  return (
    <div className="bg-white w-full h-16 border border-gray-300  justify-between flex px-20 items-center">
      <div className="w-40">
        <h1 className="text-2xl font-bold w-20">
          Local <span className="ml-5"> Worker</span>
        </h1>
      </div>
      <div>
        <div className="border h-10 w-72 border-gray-400 rounded-xl flex items-center p-2">
          <CiSearch size={25} />
          <input
            type="text"
            name=""
            placeholder="Search field"
            className=" focus:outline-none  ml-2"
            id=""
          />
        </div>
      </div>
      <div>
        <button className="border-b-2 border-gray-400 p-2" onClick={handerLink}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
