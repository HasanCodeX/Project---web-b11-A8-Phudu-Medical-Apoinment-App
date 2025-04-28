import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import Loading from "./Loading";

const DoctorsSection = () => {
  const [visibleDoctors, setVisibleDoctors] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/data/doctors.json")
      .then((res) => res.json())
      .then((data) => {
        setAllDoctors(data);
        setVisibleDoctors(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch doctors data", err);
        setLoading(false);
      });
  }, []);

  const handleShowAll = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleDoctors(allDoctors);
      setLoading(false);
      setShowAll(true);
    }, 1000); // simulate loading delay
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Best Doctors</h2>
        <p className="text-gray-600 mt-2">
          Our platform connects you with verified, experienced doctors across various specialities.
        </p>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleDoctors.map((doctor) => (
            <DoctorCard key={doctor.registration} doctor={doctor} />
          ))}
        </div>
      )}

      {!showAll && !loading && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowAll}
            className="btn btn-primary rounded-3xl px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            View All Doctors
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorsSection;
