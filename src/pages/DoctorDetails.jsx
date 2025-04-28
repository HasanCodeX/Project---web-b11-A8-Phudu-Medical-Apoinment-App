
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DoctorNotFound from "../Components/DoctorNotFound";

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/doctors.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((doc) => doc.id === id);
        setDoctor(found || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading doctor data:", error);
        setLoading(false);
      });
  }, [id]);

  const handleBooking = () => {
    if (!doctor) return;

    const existingBookings = JSON.parse(localStorage.getItem("appointments")) || [];
    const alreadyBooked = existingBookings.some((item) => item.id === doctor.id);

    toast.dismiss();

    if (alreadyBooked) {
      toast.error("Already Booked!", {
        position: "top-right",
        autoClose: 500,
      });
      return;
    }

    const newBooking = {
      id: doctor.id,
      name: doctor.name,
      education: doctor.education,
      speciality: doctor.speciality,
      fee: doctor.fee,
    };

    const updatedBookings = [...existingBookings, newBooking];
    localStorage.setItem("appointments", JSON.stringify(updatedBookings));

    toast.success(`Booked with ${doctor.name}`, {
      position: "top-right",
      autoClose: 500,
    });

    setTimeout(() => {
      navigate("/bookings");
    }, 500);
  };

  if (loading) return <div className="text-center p-10">Loading...</div>;

  if (!doctor) return <DoctorNotFound reg={id} />;

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
      {/* Profile Summary */}
      <div className="bg-gray-200 rounded-3xl border p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Doctor’s Profile Details
        </h2>
        <p>
          Driven by compassion in every act of care, guided by precision in every step of treatment.
        </p>
      </div>

      <br />

      {/* Doctor Details */}
      <div className="bg-gray-200 rounded-3xl border p-8 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-md sm:p-6">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-52 h-52 sm:w-64 sm:h-64 object-cover rounded-xl shadow"
        />
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{doctor.name}</h3>
          <p className="text-gray-600 mb-1">{doctor.education}</p>
          <p className="mb-1"><strong>Speciality:</strong> {doctor.speciality}</p>
          <p className="mb-1"><strong>Experience:</strong> {doctor.experience}</p>
          <p className="mb-1"><strong>Reg No:</strong> {doctor.registration}</p>
          <p className="mb-1"><strong>Working at:</strong> {doctor.work}</p>
          <p className="mb-1"><strong>Availability:</strong> <span className="bg-green-200 p-2 rounded-2xl">{doctor.availliblity}</span></p>
          <p className="mb-4"><strong>Fee:</strong> {doctor.fee}</p>
        </div>
      </div>

      <br />

      {/* Booking */}
      <div className="bg-gray-200 rounded-3xl border p-8 flex flex-col items-center gap-4 shadow-md sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">Book an Appointment</h3>
        <button
          onClick={handleBooking}
          className="w-full px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
