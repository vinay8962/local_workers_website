import React, { useEffect, useState } from "react";
import LocationInput from "../components/LocationInput";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Navbar from "../components/Navbar";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const AllExpert = () => {
  const [workers, setWorkers] = useState([]);
  const [selectedCity, setSelectedCity] = useState(""); // State to track selected city
  const [filteredWorkers, setFilteredWorkers] = useState([]);

  useEffect(() => {
    const WorkerData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Register Workers"));
        const workerList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWorkers(workerList);
      } catch (error) {
        console.error("Error fetching workers: ", error);
      }
    };
    WorkerData();
  }, []);

  // Filter workers based on the selected city
  useEffect(() => {
    if (selectedCity) {
      const filtered = workers.filter((worker) => worker.city === selectedCity);
      setFilteredWorkers(filtered);
    } else {
      setFilteredWorkers(workers); // If no city is selected, show all workers
    }
  }, [selectedCity, workers]);

  return (
    <div className="w-full">
      <Navbar />
      <div>
        <LocationInput onCitySelect={setSelectedCity} />
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-10 py-5 ">
          {filteredWorkers && filteredWorkers.length > 0 ? (
            filteredWorkers.map((data) => (
              <div key={data.id} className="p-4">
                <div className="bg-white h-72 p-6 rounded-lg shadow-md">
                  <div className="w-full flex justify-center">
                    <img
                      src={data.profileImage}
                      alt=""
                      className="w-28 h-28 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <h3 className="text-xl font-bold">{data.fullName}</h3>
                  </div>
                  <p className="text-lg mt-2 text-gray-600 text-center">
                    {data.workField}
                  </p>
                  <p className="text-green-600 font-bold text-xl flex items-center justify-center mt-2">
                    <IoCallOutline className="mr-2" /> +91- {data.number}
                  </p>
                  <div className="flex justify-end mt-3">
                    <p className="flex items-center">
                      <CiLocationOn className="mr-1" />
                      {data.city}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No workers found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllExpert;
