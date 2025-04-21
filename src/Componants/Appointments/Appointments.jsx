import React, { useEffect, useState } from "react";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const savedAppointments =
      JSON.parse(localStorage.getItem("appointment")) || [];
    setAppointments(savedAppointments);
  }, []);
  const handleDeleteAll = () => {
    localStorage.removeItem("appointment");
    setAppointments([]);
  };
  const handleDeleteItem = (indexToDelete) => {
    const updatedAppointments = appointments.filter(
      (_, index) => index !== indexToDelete
    );
    localStorage.setItem("appointment", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-2xl font-bold text-center p-2 m-2 text-gray-800">
          Your Appointments
        </h2>
        {appointments.length === 0 ? (
          <p className="text-center">No appointments booked yet.</p>
        ) : (
          <div className="appointments-list">
            {appointments.map((appointment, index) => (
              <div
                key={index}
                className=" w-3/4 relative mx-auto bg-slate-100 shadow-sm border border-gray-300 rounded-lg p-4 mt-4"
              >
                <h3 className="font-bold text-xl text-slate-800">
                  {appointment.doctorName}
                </h3>

                <p>
                  <strong className="text-sky-950">Time:</strong>{" "}
                  {appointment.time}
                </p>
                <p>
                  <strong className="text-sky-950">Patient Name:</strong>{" "}
                  {appointment.patientName}
                </p>
                <p>
                  <strong className="text-sky-950">Phone:</strong>{" "}
                  {appointment.phoneNumber}
                </p>

                <p>
                  <strong className="text-sky-950">Email:</strong>{" "}
                  {appointment.email}
                </p>
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => handleDeleteItem(index)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="text-center mt-4 bg-red-300">
        <h2 className="text-2xl sm:text-lg font-bold text-center p-2 m-2 text-gray-800">
          Delete All Appointments{" "}
        </h2>
        <p className="text-center">
          Are you sure you want to delete all your appointments?
        </p>
        <p className="text-center">This action cannot be undone.</p>

        <button
          className="bg-red-600 text-white px-4 py-2 m-3 rounded hover:bg-red-700"
          onClick={() => handleDeleteAll()}
        >
          Delete
        </button>
      </div>
    </>
  );
}
