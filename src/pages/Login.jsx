import React from "react";
import { WithRouter } from "utils/Navigation";

import Layout from "components/Layout";
import Image from "assets/img.jpg";

const Login = () => {
  return (
    <>
      <Layout>
        <div className="md:flex flex-row items-center px-2">
          <div className="w-1/2 lg:flex justify-center hidden ">
            <img
              className="h-screen bg-cover bg-center"
              src={Image}
              alt="img"
            />
          </div>
          <div className="lg:w-1/2 lg:flex justify-center w-full px-3 mt-5">
            <div>
              <h1 className="font-semibold text-3xl gap-y-2">Welcome Back!</h1>
              <p className="font-medium">Sign in to your account</p>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text-alt" />
                  <span className="label-text-alt text-primary font-medium">
                    Reset Password
                  </span>
                </label>
              </div>
              <button className="btn normal-case hover:bg-secondary bg-primary border-none w-80">
                Sign In
              </button>
              <p className="flex text-base">
                Don't have an account?
                <p className="hover: text-primary pl-1">Register Here</p>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WithRouter(Login);
