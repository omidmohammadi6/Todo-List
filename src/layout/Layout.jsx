import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="">
      <nav>
        <ul className="flex items-center justify-around text-white bg-gray-500 p-5">
          {/* Wrapping Link inside li for semantic correctness */}
          <li
            key="home"
            className="hover:scale-110 transition transform duration-300 ease-in-out"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            key="about"
            className="hover:scale-110 transition transform duration-300 ease-in-out"
          >
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
