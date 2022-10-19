import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar bg-white px-5 md:px-14 flex justify-between mb-3 sticky top-0 z-10 shadow-sm">
      <div>
        <Link to={'/home'}>
          <a href="#Link" className="font-semibold text-2xl">
            <span className="text-secondary">sosi</span>
            <span className="text-primary">alta</span>
          </a>
        </Link>
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="bg-main rounded-lg p-2 hidden md:block"
        />
      </div>
      <div className="flex-none gap-2">
        <Link to="/home">
          <AiFillHome className="w-6 h-6" />
        </Link>
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="avatar">
            <div className="w-6 rounded-full">
              <img alt="Gambar" src="https://randomuser.me/api/portraits/men/35.jpg" />
            </div>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu shadow-lg bg-white rounded-lg w-40"
          >
            <Link to="/profile">
              <li>
                <a href="#Gambar" className="text-secondary font-semibold">Profile</a>
              </li>
            </Link>
            <hr className="text-main" />
            <li>
              <a href="Gambar" className="text-gray font-semibold">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
