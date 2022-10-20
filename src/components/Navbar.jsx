import React from "react";
import { Link } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Profile from "assets/nav-profile.jpg";

const Navbar = (props) => {
  return (
    <div className="navbar bg-white px-24 py-3 flex justify-between sticky top-0 z-10 shadow-sm">
      <div>
        <Link to={"/home"}>
          <a href="#Link" className="font-semibold text-2xl">
            <span className="text-secondary">sosi</span>
            <span className="text-primary">alta</span>
          </a>
        </Link>
      </div>
      <div className="flex mt-form-control">
        <button className="py-3.5 pl-3 pr-2 border-y-2 border-l-2 border-none bg-main rounded-l-lg ">
          <FiSearch className="text-xl text-[#999999]" />
        </button>
        <input
          type="text"
          placeholder="Cari"
          className="bg-main input rounded-l-none rounded-lg hidden md:block"
        />
      </div>
      <div className="gap-2">
        <Link to="/home">
          <AiFillHome className="w-8 h-8 mr-4" />
        </Link>
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="avatar">
            <div className="w-8 rounded-full mt-2">
              <img alt="Gambar" src={Profile} />
            </div>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu shadow-lg bg-white rounded-lg w-40"
          >
            <li>
              <button
                onClick={props.onProfile}
                href="#Gambar"
                className="text-secondary font-medium active:bg-[#FDE1CE]"
              >
                Profile
              </button>
            </li>

            <hr className="text-main" />
            <li>
              <button
                onClick={props.onNavigate}
                href="Gambar"
                className="text-gray font-medium active:bg-[#FFEBEB]"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
