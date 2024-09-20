import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ACmechanic from "../assets/Worker/repairmen-taking-apart-hvac-system.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Slider from "react-slick";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const AcMechanic = () => {
  const [workers, setWorkers] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Register Workers"));
        const workersList = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Add document ID
          ...doc.data(), // Spread the document data
        }));
        const filteredWorker = workersList.filter(
          (worker) => worker.workField === "AC Expert"
        );
        setWorkers(filteredWorker);
      } catch (error) {
        console.error("Error fetching workers: ", error);
      }
    };
    fetchdata();
  }, []);

  console.log(workers);
  return (
    <div className="w-full p-10 ">
      <div className="w-full flex justify-start">
        <h1 className="font-sans font-bold text-4xl">AC Expert</h1>
      </div>
      <div className="w-full my-5 md:flex ">
        <div className="w-1/3">
          <img src={ACmechanic} alt="" className="h-full" />
        </div>
        <div className="w-8/12 my-5 px-5 ">
          <div className="slider-container  ">
            <Slider {...settings}>
              {workers.slice(0, 5).map((data) => (
                <div key={data.id} className="p-4 ">
                  <div className="bg-white  h-72 p-6 rounded-lg shadow-md">
                    <div className="w-full flex justify-center">
                      <img
                        src={data.profileImage}
                        alt=""
                        className="w-28 h-28"
                      />
                    </div>
                    <div className="flex  items-center justify-center">
                      <h3 className="text-xl font-bold">{data.fullName}</h3>
                    </div>
                    <p className="text-lg mt-4 text-gray-600">
                      {data.workField}
                    </p>
                    <p className="text-green-600 text-bold text-2xl flex items-center">
                      <IoCallOutline /> +91- {data.number}
                    </p>
                    <div className="flex justify-end mt-3">
                      <p className="flex items-center">
                        <CiLocationOn className="font-bold" />
                        {data.city}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
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
