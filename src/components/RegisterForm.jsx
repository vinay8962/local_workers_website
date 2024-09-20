import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firestore
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { cityData } from "../CityJsonData"; // Ensure cityData includes state info

const RegisterForm = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    workField: "",
    address: "",
    city: "",
    state: "",
  });

  const cityDataSort = () => {
    return cityData.sort((a, b) => a.name.localeCompare(b.name));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    const selectedCityData = cityData.find(
      (city) => city.name === selectedCity
    );

    setFormData((prevData) => ({
      ...prevData,
      city: selectedCity,
      state: selectedCityData ? selectedCityData.state : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Register Workers"), {
        ...formData,
        profileImage: profileImage || "",
      });
      console.log("Document written with ID: ", docRef.id);
      navigate("/");
      toast.success("Data successfully saved!");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error saving data, please try again.");
    }
  };

  const handleClick = () => {
    document.getElementById("profileImage").click();
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-1">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Profile Image */}
          <div className="w-full flex justify-center">
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="mt-4">
              <div
                onClick={handleClick}
                className="mt-2 w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-all duration-200 shadow-md"
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile Preview"
                    className="w-32 h-32 object-cover rounded-full"
                  />
                ) : (
                  <FaCamera className="text-gray-600 text-3xl" />
                )}
              </div>
              <p className="text-xl font-medium font-bold text-gray-700">
                Profile Image
              </p>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Number */}
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Number
            </label>
            <input
              type="text"
              name="number"
              id="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Work Field */}
          <div>
            <label
              htmlFor="workField"
              className="block text-sm font-medium text-gray-700"
            >
              Work Field
            </label>
            <select
              name="workField"
              id="workField"
              value={formData.workField}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select your field</option>
              <option value="Mechanic">Mechanic</option>
              <option value="AC Expert">AC Expert</option>
              <option value="Electrician">Electrician</option>
              <option value="Plumber">Plumber</option>
              <option value="Civil Construction">Civil Construction</option>
              <option value="Labour">Labour</option>
              <option value="Painter">Painter</option>
              <option value="All Rounder Labour">All Rounder Labour</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Welder">Welder</option>
              <option value="Gardener">Gardener</option>
              <option value="Driver">Driver</option>
              <option value="Security Guard">Security Guard</option>
              <option value="Cleaner">Cleaner</option>
            </select>
          </div>

          {/* Address and City */}
          <div className="flex gap-4 w-full">
            <div className="w-1/2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div className="w-1/2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <select
                name="city"
                id="city"
                value={formData.city}
                onChange={handleCityChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select city</option>
                {cityDataSort().map((data) => (
                  <option key={data.id} value={data.name}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* State */}
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              readOnly
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
