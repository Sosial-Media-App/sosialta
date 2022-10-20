import React from "react";

import Box from "@mui/material/Box";

const CardEditProfile = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <div className="p-5 bg-white rounded-xl">
        <h2 className="text-secondary font-semibold text-base">Edit profile</h2>
        <div className="flex items-center mt-7">
          <form className="flex flex-col w-full">
            <label className="text-sm font-medium mb-3">Full Name</label>
            <input
              className="h-14 border-2 input input-bordered form-control w-full border-[#F0F4FD] rounded-md pl-3 mb-6"
              type="text"
              placeholder="Edit your name"
              //   onChange={(e) => setFullName(e.target.value)}
            />

            <label className="text-sm font-medium mb-3">Username</label>
            <input
              className="h-14 border-2 input input-bordered form-control w-full border-[#F0F4FD] rounded-md pl-3 mb-6"
              type="text"
              placeholder="Edit your username"
              //   onChange={(e) => setUserName(e.target.value)}
            />

            <label className="text-sm font-medium mb-3">Password</label>
            <input
              className="w-full h-14 border-2 input input-bordered border-[#F0F4FD] rounded-md pl-3 mb-4"
              placeholder="Edit your password"
              type="password"
              //   onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn border-none normal-case hover:bg-[#F77621] text-lg font-medium text-white w-full bg-primary h-8 rounded-md pl-3 mb-4"
              // loading={loading || disabled}
              // onClick={(e) => handleSubmit(e)}
            >
              Save Changes
            </button>
            <button
              className="btn border-none normal-case hover:bg-[#fbba8f] text-lg font-medium text-[#FF3333] w-full bg-[#FFEBEB] h-8 rounded-md pl-3 mb-4"
              // loading={loading || disabled}
              // onClick={(e) => handleSubmit(e)}
            >
              Delete Account
            </button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default CardEditProfile;
