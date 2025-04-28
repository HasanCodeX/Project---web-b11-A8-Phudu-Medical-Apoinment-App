import React from "react";
import { FaRegRegistered } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/doctors/${doctor.id}`); 
  };

  return (
    <div className="card bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 rounded-2xl">
      <div className="p-4 flex flex-col items-center text-center">
        <div className="w-full h-60 rounded-2xl overflow-hidden mb-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-2 mb-2 flex-wrap justify-center">
          <span className="text-green-600 bg-green-100 text-xs px-2 py-0.5 rounded-full">
            Available
          </span>
          <span className="text-blue-600 bg-blue-100 text-xs px-2 py-0.5 rounded-full">
            {doctor.experience}
          </span>
        </div>

        <h2 className="text-lg font-semibold">{doctor.name}</h2>
        <p className="text-sm text-gray-600">{doctor.education}</p>
        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
          <FaRegRegistered className="text-base text-gray-500" />
          <span>Reg No: {doctor.registration}</span>
        </p>

        <div className="mt-4 w-full">
          <button
            className="btn btn-outline btn-primary btn-sm w-full rounded-2xl"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
