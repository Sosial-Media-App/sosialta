import React from "react";
import { WithRouter } from "utils/Navigation";

import Layout from "components/Layout";
import CardSosmed from "components/CardSosmed";
import CardSuggestion from "components/CardSuggestion";
import { Stack, Box } from "@mui/material";
import Navbar from "components/Navbar";
import Sampul from "assets/bg-sampul-profile.svg";
import Profile from "assets/profile.png";

const MyProfile = () => {
  return (
    <Layout>
      <Navbar />
      <div>
        <div className="-m-12">
          <img src={Sampul} alt="background" />
        </div>
        <div className="mx-24 items-center grid grid-cols-7 ">
          <div className="w-44 h-44 rounded-full bg-black">
            <img src={Profile} alt="profile" />
          </div>
          <div className="ml-6 mt-4">
            <h2 className="font-semibold text-2xl mb-1">Jordyn Saris</h2>
            <p className="font-medium text-base">@jordynsaris</p>
          </div>
        </div>
        <hr className="mx-24 my-6 text-[#D9D9D9]" />

        <div className="tabs">
          <a
            href="post"
            className="tab tab-bordered tab-active mx-24 text-primary"
          >
            Post
          </a>
          <hr />
        </div>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          className="px-0 md:px-20"
        >
          <Box flex={2}>
            <CardSosmed />
            <CardSosmed />
          </Box>
          <CardSuggestion />
        </Stack>
      </div>
    </Layout>
  );
};

export default WithRouter(MyProfile);
