import React from "react";
import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

const NavbarAnonym = () => {
  return (
    <div className="navbar bg-white px-24 py-3 flex justify-between sticky top-0 z-10 shadow-sm">
      <div>
        <Link to="/">
          <a href="#link" className="font-semibold text-2xl">
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
      <div className="flex-none font-semi-bold text-xs space-x-3">
        <Link to="/login">
          <button className="bg-[#FEF3EB] rounded-md py-2.5 px-8 font-semibold text-sm text-delete ">
            Log In
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-primary rounded-md py-2.5 px-8 font-semibold text-sm text-white ">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarAnonym;
