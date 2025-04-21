import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full  mx-auto flex justify-between items-center p-2 bg-gradient-to-tr from-purple-500   via-purple-950   shadow-md">
      <div>
        <FaUserDoctor className="text-slate-50 text-2xl" />
      </div>
      <ul className="navbar-list flex gap-2 text-lg sm:text-sm font-semibold">
        <Link to={"/"} className="navbar-item text-lime-50 hover:text-gray-900 transform transition-all ease-in-out duration-300">
          Home
        </Link>
        <Link to={"/appointments"} className="navbar-item text-lime-50 hover:text-gray-900 transform transition-all ease-in-out duration-300">
          Appointments
        </Link>
      </ul>
    </div>
  );
}
