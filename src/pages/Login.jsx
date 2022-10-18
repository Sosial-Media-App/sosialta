import React from "react";
import Layout from "components/Layout";
import { WithRouter } from "utils/Navigation";
import Image from "assets/Rectangle51.svg";

const Login = () => {
  return (
    <>
      <Layout>
        <div className="flex items-center">
          <div className="flex-auto justify-center">
            <img className="h-screen bg-contain" src={Image} alt="img" />
            <div className="bg-slate-400 absolute text-center">
              <p className="flex justify-center text-secondary font-semibold">
                sosi
                <p className="text-primary">alta</p>
              </p>
              <p>
                Find your all friends in one place by
                <br />
                explore the apps quick and easily
              </p>
            </div>
          </div>
          <div className="flex-auto justify-center">
            <h1 className="font-semibold text-3xl gap-y-2">Welcome Back!</h1>
            <p className="font-medium">Sign in to your account</p>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text-alt" />
                <span className="label-text-alt text-primary font-medium">
                  Reset Password
                </span>
              </label>
            </div>
            <button className="btn bg-primary border-none w-80">Sign In</button>
            <p className="flex text-base">
              Don't have an account?
              <p className="hover: text-primary pl-1">Register Here</p>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WithRouter(Login);
