import React from "react";
import { useNavigate } from "react-router-dom";
import SearchField from "./SearchField";
import LocationInput from "./LocationInput";

const Navbar = () => {
  const navigate = useNavigate();
  const handerLink = () => {
    navigate("/register");
  };
  return (
    <div className="bg-white w-full  md:h-16  h-auto border border-gray-300  justify-between md:flex md:px-20 px-2 items-center">
      <div className="w-40">
        <h1 className="text-2xl font-bold w-20">
          Local <span className="ml-5"> Worker</span>
        </h1>
      </div>
      <div className="gap-10 md:flex ">
        {/* <div className="my-2">
          <LocationInput />
        </div> */}
        <div className="my-2">
          {" "}
          <SearchField />
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
