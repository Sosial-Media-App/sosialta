import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleAuth } from "utils/redux/reducers/reducer";
import { apiRequest } from "utils/apiRequest";
import { WithRouter } from "utils/Navigation";
import { Link } from "react-router-dom";
import Banner from "assets/img.jpg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    apiRequest("login", "post", body)
      .then((res) => {
        const { token } = res.data
        localStorage.setItem("token", token)
        dispatch(handleAuth(true))
        alert("Login Successful")
        navigate("/home")

      })
      .catch((err) => {
        const { data } = err.response;
        alert(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="md:flex flex-row items-center">
        <img
          className="w-1/2 lg:flex justify-center hidden"
          src={Banner}
          alt="Banner"
        />
        <div
          className="flex flex-col w-full p-4 sm:w-1/2 lg:ml-16 md:ml-36 sm:pt-44 lg:pr-44"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="text-5xl font-semibold text-center sm:text-left text-secondary mb-8 ">
            Welcome Back!
          </h1>
          <h5 className="text-xl font-medium mb-6 ">Sign in to your account</h5>
          <form className="flex flex-col w-full">
            <label className="text-lg font-medium mb-3">Your email</label>
            <input
              className="h-14 border-2 input input-bordered form-control w-full border-[#F0F4FD] rounded-md pl-3 mb-6"
              type="email"
              placeholder="Email adress"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-lg font-medium mb-3">Password</label>
            <input
              className="w-full h-14 border-2 input input-bordered border-[#F0F4FD] rounded-md pl-3 mb-4"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-lg text-primary text-right mb-10">
              Reset Password
            </p>
          </form>

          <button
            className="btn border-none normal-case hover:bg-[#F77621] text-lg font-medium text-white w-full bg-primary h-14 rounded-md"
            loading={loading || disabled}
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </button>

          <div className="flex text-base font-normal text-center mt-8 justify-center">
            <p className="text-secondary font-normal">Don't have an account?</p>
            <Link to={"/register"}>
              <p className=" text-primary pl-1">Register Here</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithRouter(Login);
