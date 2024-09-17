import React from "react";
import { useNavigate } from "react-router-dom";
import SearchField from "./SearchField";

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
        <SearchField />
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
