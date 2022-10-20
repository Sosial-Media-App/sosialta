import React from "react";
import { WithRouter } from "utils/Navigation";
import Layout from "components/Layout";
import CardSosmed from "components/CardSosmed";
import CardSuggestion from "components/CardSuggestion";
import { Stack, Box } from "@mui/material";
import Navbar from "components/Navbar";
import Sampul from "assets/bg-sampul-profile.svg";
import Profile from "assets/profile.png";

const ProfilePage = () => {
  return (
    <Layout>
      <Navbar />
      <div>
        <img src={Sampul} alt="background" />
        <div className="mx-24 grid grid-cols-7 ">
          <img src={Profile} alt="profile" />
          <div className="my-28">
            <p className="font-semibold text-2xl">Jordyn Saris</p>
            <p className="font-medium text-base">@jordynsaris</p>
          </div>
        </div>
        <div class="grid grid-cols-1 divide-y divide-gray mx-28">
          <div />
          <button className="underline decoration-primary">Post</button>
        </div>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          className="px-0 md:px-20"
        >
          <Box flex={2}>
            <CardSosmed></CardSosmed>
            <CardSosmed></CardSosmed>
          </Box>
          <CardSuggestion></CardSuggestion>
        </Stack>
      </div>
    </Layout>
  );
};

export default WithRouter(ProfilePage);
