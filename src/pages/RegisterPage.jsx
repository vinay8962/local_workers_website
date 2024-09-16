import React from "react";
import RegisterForm from "../components/RegisterForm";
import Image from "../assets/10791980_4567334.jpg";

const RegisterPage = () => {
  return (
    <div className="w-full flex h-[780px] bg-white">
      <div className="w-1/2">
        <img src={Image} alt="" />
      </div>
      <div className="w-1/2 p-10">
        {" "}
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
