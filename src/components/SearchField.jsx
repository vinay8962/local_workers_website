import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const SearchField = () => {
  const [workers, setWorkers] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredWorkers, setFilteredWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Register Workers"));
        const workersList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWorkers(workersList);
      } catch (error) {
        console.error("Error fetching workers: ", error);
      }
    };

    fetchWorkers();
  }, []);

  useEffect(() => {
    const searchFilter = () => {
      if (searchData.trim() === "") {
        setFilteredWorkers([]);
      } else {
        const filtered = workers.filter((worker) =>
          worker.workField.toLowerCase().includes(searchData.toLowerCase())
        );
        setFilteredWorkers(filtered);
      }
    };

    searchFilter();
  }, [searchData, workers]);

  const searchWorker = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <div className="relative">
      <div className="border h-10 w-72 border-gray-400 rounded-xl flex items-center p-2">
        <CiSearch size={25} />
        <input
          type="text"
          placeholder="Search workers"
          className="focus:outline-none ml-2 w-full"
          value={searchData}
          onChange={searchWorker}
        />
      </div>
      {searchData && (
        <div className="absolute top-full mt-2 w-72 border border-gray-400 bg-white rounded-xl shadow-lg max-h-60 overflow-auto">
          {filteredWorkers.length > 0 ? (
            filteredWorkers.map((worker) => (
              <div
                key={worker.id}
                className="p-2 border-b last:border-b-0 hover:bg-gray-100"
              >
                <p>{worker.fullName}</p>
                <p>{worker.workField}</p>
              </div>
            ))
          ) : (
            <p className="p-2 text-gray-500">No workers found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchField;
