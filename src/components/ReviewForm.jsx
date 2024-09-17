import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firestore config
import { toast } from "react-toastify";

const ReviewForm = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new review document in Firestore
      await addDoc(collection(db, "reviews"), {
        name,
        description,
        rating,
        timestamp: new Date(), // Add timestamp for review submission
      });
      toast.success("Review submitted successfully!");

      // Clear the form after submission
      setName("");
      setDescription("");
      setRating(null);
      setHover(null);
      setTimeout(() => {
        closeModal();
      }, 1000);
    } catch (error) {
      console.error("Error adding review: ", error);
      toast.error("Failed to submit review.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Leave a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Description Field */}
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Write your review"
            required
          />
        </div>

        {/* Star Rating */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Star Rating</label>
          <div className="flex">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <label key={starValue}>
                  <input
                    type="radio"
                    name="rating"
                    value={starValue}
                    onClick={() => setRating(starValue)}
                    className="hidden"
                  />
                  <FaStar
                    size={30}
                    className={`cursor-pointer transition-colors ${
                      starValue <= (hover || rating)
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }`}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 transition"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
