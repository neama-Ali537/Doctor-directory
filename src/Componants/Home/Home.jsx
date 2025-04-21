import React, { useContext, useState } from "react";
import { dataContext } from "../DataContext/DataContextProvider";
import { FaStar } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { data } = useContext(dataContext);
  const spiecialties = [...new Set(data.map((item) => item.specialty))];
  const [searchTrem, setSearchTrem] = useState("");
  const [avilable, setAvilable] = useState("");
  const availability = [...new Set(data.map((item) => item.availability))];

  const filterDoctors = data.filter((item) => {
    const matchSpecialty = searchTrem === "" || item.specialty === searchTrem;
    const matchAvailability = avilable === "" || item.availability === avilable;
    return matchSpecialty && matchAvailability;
  });

  let [isOpen, setIsOpen] = useState(false);
  let [selectedDoctor, setSelectDoctor] = useState(null);
  
  function closeModal() {
    setIsOpen(false);
  }

  function openModal(doctor) {
    setSelectDoctor(doctor);
    setIsOpen(true);
  }

  return (
    <>
    <div className="container mx-auto px-4">
      <h1 className="text-lg md:text-xl font-bold text-center py-4 text-gray-800">
        Welcome to our Clinic
      </h1>
  
      {/* Filters Section */}
      
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        {/* Specialty Select Box */}
        <div className="flex-1 border border-gray-200 rounded-lg p-3">
          <label className="font-semibold text-slate-800 mb-2 block">
            Choose the medical specialty
          </label>
          <select
            value={searchTrem}
            onChange={(e) => setSearchTrem(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-base"
          >
            {spiecialties.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
  
        {/* Availability Select Box */}
        <div className="flex-1 border border-gray-200 rounded-lg p-3">
          <label className="font-semibold text-slate-800 mb-2 block">
            Choose the available doctor
          </label>
          <select
            value={avilable}
            onChange={(e) => setAvilable(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-base"
          >
            {availability.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
  
      {/* Doctors Section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filterDoctors.length > 0 &&
          filterDoctors.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[340px] mx-auto border border-gray-300 rounded-lg shadow-md p-5 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="text-center md:text-left flex-1">
                  <p className="text-slate-800 font-bold">{item.name}</p>
                  <p className="text-slate-800 font-light text-lg">
                    {item.specialty}
                  </p>
                  <div className="text-sky-950 font-bold mt-2">
                    <div className="flex items-center justify-center md:justify-start">
                      {item.rating}
                      <FaStar className="text-yellow-400 text-lg ml-1" />
                      {item.rating >= 4.6 && (
                        <FaStar className="text-yellow-400 text-lg ml-1" />
                      )}
                    </div>
                    <p className="text-slate-800 font-light text-base">
                      Location: {item.location}
                    </p>
                    <p className="text-slate-800 font-light text-base">
                      Availability: {item.availability}
                    </p>
                  </div>
                </div>
  
                <img
                  src={`https://randomuser.me/api/portraits/lego/${item.id % 10}.jpg`}
                  alt={item.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
  
              <button
                onClick={() => openModal(item)}
                aria-label={`book appointment with ${item.name}`}
                className="bg-purple-950 w-full text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-purple-800 transition"
              >
                Book Appointment
              </button>
  
              {/* Modal */}
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black/25" />
                  </Transition.Child>
  
                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Book with: {selectedDoctor?.name}
                          </Dialog.Title>
                          <div className="mt-2 text-sm text-gray-800">
                            <p>
                              <strong className="text-blue-950">Specialty:</strong>{" "}
                              {selectedDoctor?.specialty}
                            </p>
                            <p>
                              <strong className="text-blue-950">Location:</strong>{" "}
                              {selectedDoctor?.location}
                            </p>
                            <p>
                              <strong className="text-blue-950">Availability:</strong>{" "}
                              {selectedDoctor?.availability}
                            </p>
                            <p>
                              <strong className="text-blue-950">Available Time today:</strong>
                            </p>
                            <ul className="list-disc ml-6 mt-2 flex flex-wrap gap-2">
                              {selectedDoctor?.timeSlots.map((slot, idx) => (
                                <li
                                  key={idx}
                                  className="bg-purple-600 list-none text-white rounded px-2 py-1"
                                >
                                  {slot}
                                </li>
                              ))}
                            </ul>
                          </div>
  
                          <div className="mt-4 flex justify-between">
                            <button
                              onClick={() =>
                                navigate("/Doctor-directory/bookingform", {
                                  state: { selectedDoctor: selectedDoctor },
                                })
                              }
                              className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-950 "
                            >
                              Confirm
                            </button>
                            <button
                              onClick={closeModal}
                              className="bg-gray-300 text-black px-4 py-2 rounded"
                            >
                              Close
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          ))}
      </div>
    </div>
  </>
  
  );
}
