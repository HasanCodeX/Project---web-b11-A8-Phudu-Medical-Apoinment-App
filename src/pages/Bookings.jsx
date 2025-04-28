import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Chart from "./Chart";

const Bookings = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(savedAppointments);
  }, []);
  const cancelAppointment = (id) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== id);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
    toast.error("Appointment Cancelled", {
      position: "top-right",
      autoClose: 500,
    });
  };

  const handleCancelClick = (id) => {
    setTimeout(() => cancelAppointment(id), 500);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl mb-3 font-bold text-center">Your Bookings</h2>
      <p className="text-black/60 font-medium mb-6 text-center">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

      {appointments.length === 0 ? (
        <div className="text-center mt-20">
          <h3 className="text-xl font-semibold">No Appointments Found</h3>
          <Link
            to="/"
            className="inline-block mt-4 bg-blue-600 text-white px-5 py-2.5 rounded-3xl hover:bg-blue-700 transition"
          >
            Go to Homepage
          </Link>
        </div>
      ) : (
        <div>
          <Chart appointments={appointments}/>
          <div className="grid gap-6 grid-cols-1">
          {appointments.map((doctor) => (
            <div
              key={doctor.id}
              className=" p-4 rounded-xl w-full shadow-sm bg-gray-200 flex flex-col justify-between"
            >
              <div className="bg-white rounded-3xl  p-8 flex flex-col items-center gap-4 shadow-md sm:p-6">
                <h3 className="text-lg font-semibold mb-2">{doctor.name}</h3>
                <p className="text-sm"><strong>Fee:</strong> {doctor.fee}</p>
                <p className="text-sm"><strong>Education:</strong> {doctor.education}</p>
                <p className="text-sm"><strong>Speciality:</strong> {doctor.speciality}</p>
              </div>

              <button
                onClick={() => handleCancelClick(doctor.id)}
                className="mt-4 bg-white text-red-600 px-4 py-2 border border-red-400 rounded-3xl hover:bg-red-600 hover:text-white transition"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
