import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const WorkersList = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(workers);
  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Register Workers"));
        const workersList = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Add document ID
          ...doc.data(), // Spread the document data
        }));
        setWorkers(workersList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching workers: ", error);
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []); // Empty dependency array to run only once

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Workers List</h2>
      <ul className="flex">
        {workers.map((worker) => (
          <li key={worker.id} className="mb-4 p-4 border rounded-md">
            {worker.profileImage && (
              <img
                src={worker.profileImage}
                alt={`${worker.fullName}'s Profile`}
                className="w-32 h-32 object-cover rounded-full mt-4"
              />
            )}
            <p>
              <strong>Full Name:</strong> {worker.fullName}
            </p>
            <p>
              <strong>Phone Number:</strong> {worker.number}
            </p>
            <p>
              <strong>Work Field:</strong> {worker.workField}
            </p>
            <p>
              <strong>City:</strong> {worker.city}
            </p>
            {/* Add more fields if necessary */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkersList;
