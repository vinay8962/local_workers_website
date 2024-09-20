import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { cityData } from "../CityJsonData";

const LocationInput = ({ onCitySelect }) => {
  const cityDataSort = () => {
    return cityData.sort((a, b) => a.name.localeCompare(b.name));
  };

  const handleCityChange = (e) => {
    onCitySelect(e.target.value); // Send the selected city back to AllExpert
  };

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <div className="flex items-center border border-gray-400 rounded-xl p-2 bg-white">
        <CiLocationOn size={25} className="text-gray-600 mr-2" />
        <select
          name="city"
          id="city"
          className="w-full bg-transparent outline-none text-gray-700"
          onChange={handleCityChange}
        >
          <option value="">Select City</option>
          {cityDataSort().map((city) => (
            <option value={city.name} key={city.id} className="text-gray-700">
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocationInput;
