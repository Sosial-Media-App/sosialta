import React from "react";
import { WithRouter } from "utils/Navigation";
import { Link } from "react-router-dom";

import Banner from "assets/img.jpg";

const Register = () => {
  return (
    <>
      <div className="md:flex flex-row items-center">
        <img
          className="w-1/2 lg:flex justify-center hidden"
          src={Banner}
          alt="Banner"
        />
        <div className="flex flex-col w-full p-4 sm:w-1/2 lg:ml-16 md:ml-36 sm:pt-44 lg:pr-44">
          <h1 className="text-5xl font-semibold text-center sm:text-left text-secondary mb-8 ">
            Registration
          </h1>
          <p className="text-xl text-secondary mb-9">
            Let’s get you all set up so you can verify your account and explore.
          </p>
          <h5 className="text-xl font-medium mb-6 ">
            Manage your account here
          </h5>
          <form className="flex flex-col w-full">
            <label className="text-lg font-medium mb-3">Full Name</label>
            <input
              className="h-14 border-2 input input-bordered form-control w-full border-[#F0F4FD] rounded-md pl-3 mb-6"
              type="text"
              placeholder="Fullname"
            />

            <label className="text-lg font-medium mb-3">Username</label>
            <input
              className="h-14 border-2 input input-bordered form-control w-full border-[#F0F4FD] rounded-md pl-3 mb-6"
              type="text"
              placeholder="Username"
            />

            <label className="text-lg font-medium mb-3">Your email</label>
            <input
              className="h-14 border-2 input input-bordered form-control w-full border-[#F0F4FD] rounded-md pl-3 mb-6"
              type="email"
              placeholder="Email adress"
            />

            <label className="text-lg font-medium mb-3">Password</label>
            <input
              className="w-full h-14 border-2 input input-bordered border-[#F0F4FD] rounded-md pl-3 mb-4"
              placeholder="Password"
              type="password"
            />

            <p className="text-lg text-primary text-right mb-10">
              Reset Password
            </p>
          </form>

          <button className="btn border-none normal-case hover:bg-[#F77621] text-lg font-medium text-white w-full bg-primary h-14 rounded-md">
            Create Account
          </button>

          <div className="flex text-base font-normal text-center mt-8 justify-center">
            <p className="text-secondary font-normal">
              Already have an account?
            </p>
            <Link to={"/login"}>
              <p className=" text-primary pl-1">Login Here</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithRouter(Register);
