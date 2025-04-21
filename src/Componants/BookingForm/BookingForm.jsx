import React, { useContext, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

export default function BookingForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const selectedDoctor = location.state?.selectedDoctor;
  if (!selectedDoctor) {
    return <div>No data available</div>;
  }
  const [selectedTime, setselectedTime] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("please select a time slot");
      return;
    }
    const data = {
      doctorName: selectedDoctor.name,
      patientName: name,
      phoneNumber: phone,
      email: email,
      time: selectedTime,
    };
    const saveDate = JSON.parse(localStorage.getItem("appointment")) || [];
    localStorage.setItem("appointment", JSON.stringify([...saveDate, data]));
    alert("Your appointment has been booked successfully");
    navigate("/Doctor-directory/appointments");
  };
  return (
    <>
      <div className="container">
        <h2 className="text-2xl font-bold text-center p-2 m-2 text-gray-800">
          Please enter your data to complete the reservation
        </h2>
        <h5 className=" font-bold  p-2 m-2 text-gray-700">
          {selectedDoctor.name}
        </h5>
        <form
          onSubmit={handelSubmit}
          className="border-collapse max-w-xl border border-gray-400 rounded-lg p-4 w-3/4 mx-auto"
        >
          <label className="font-lg text-lg text-slate-800">
            Patient Name*
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            placeholder="Enter your name"
            aria-label="patient name"
            aria-describedby="patient name"
            className="w-full block p-1 border-2 border-gray-300 rounded-lg mt-2 font-thin text-lg "
            tabIndex={0}
          />
          <br />
          <label className="font-lg text-lg text-slate-800">Phone Number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            minLength={11}
            type="number"
            placeholder="Enter your phone number"
            aria-label="patient phone number"
            aria-describedby="patient phone number"
            className="w-full block p-1 border-2 border-gray-300 rounded-lg mt-2 font-thin text-lg "
            tabIndex={0}
          />
          <br />
          <label className="font-lg text-lg text-slate-800">
            Email Address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter your email"
            aria-label="patient email"
            aria-describedby="patient email"
            className="w-full block p-1 border-2 border-gray-300 rounded-lg mt-2 font-thin text-lg "
            tabIndex={0}
          />
          <br />
          <p className="font-lg text-lg text-slate-800">Availble Date:</p>
          <div>
            {selectedDoctor.timeSlots.map((item, index) => (
              <div key={index}>
                <input
                className="mx-2 cursor-pointer"
                  type="radio"
                  value={item}
                  onChange={(e) => setselectedTime(e.target.value)}
                  name="time"
                  required
                  aria-label="time slots"
                />
                {item}
              </div>
            ))}
            <button
              type="submit"
              className="bg-purple-950 hover:bg-purple-800 text-white font-semibold px-4 py-2 mt-4 rounded-lg mx-auto block"
              tabIndex={0}
             
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
