import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white w-full h-16 border border-gray-300  justify-between flex px-20 items-center">
      <div className="w-40">
        <h1 className="text-2xl font-bold w-20">
          Local <span className="ml-5"> Worker</span>
        </h1>
      </div>
      <div>
        <input
          type="text"
          name=""
          placeholder="Search field"
          className="border h-10 w-72 border-gray-400 rounded-xl"
          id=""
        />
      </div>
      <div>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
