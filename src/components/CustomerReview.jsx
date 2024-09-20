import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Avatar from "../assets/pngegg.png";
import ReviewForm from "./ReviewForm";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Slider from "react-slick";
const CustomerReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [review, setReview] = useState([]);
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
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
    const fetchReview = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "reviews"));
        const reviewList = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Add document ID
          ...doc.data(), // Spread the document data
        }));
        setReview(reviewList);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching review: ", error);
        // setLoading(false);
      }
    };

    fetchReview();
  }, []); // Empty dependency array to run only once

  const openModal = () => {
    setIsOpen(true);
  };
  console.log(review);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full p-10">
      <div className="w-full">
        <h1 className="font-sans font-bold text-4xl">Customer Review</h1>
      </div>
      <div className="w-full  flex justify-center">
        <div className="slider-container w-10/12">
          <Slider {...settings}>
            {review.map((data) => (
              <div key={data.id} className="p-4 ">
                <div className="bg-white  h-72 p-6 rounded-lg shadow-md">
                  <div className="flex  items-center">
                    <div className="w-12 h-12 border border-gray-400 p-2 rounded-full">
                      <img src={Avatar} alt="" />
                    </div>
                    <h3 className="text-xl font-bold ml-5">{data.name}</h3>
                  </div>
                  <p className="text-lg mt-4 text-gray-600">
                    {data.description}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 text-3xl">
                      {"★".repeat(data.rating)}
                    </span>
                    <span className="text-gray-400 text-3xl">
                      {5 - data.rating > 0 && "☆".repeat(5 - data.rating)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          className="border-b-2 font-bold flex items-center"
          onClick={openModal}
        >
          Give Feedback <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative"
          >
            <button
              className="absolute top-2 font-bold text-3xl right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              &#10005;
            </button>
            <ReviewForm closeModal={closeModal} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CustomerReview;
