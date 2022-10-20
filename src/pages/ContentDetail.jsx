import React from "react";
import { WithRouter } from "utils/Navigation";
import { Link } from "react-router-dom";

import Layout from "components/Layout";
import Navbar from "components/Navbar";
import CardSosmed from "components/CardSosmed";
import CardSuggestion from "components/CardSuggestion";
import { Stack, Box } from "@mui/material";
import { IoIosArrowRoundBack } from "react-icons/io";

const ContentDetail = () => {
  return (
    <Layout>
      <Navbar />
      <div className="w-full px-5 md:px-16 py-3">
        <Link to={'/home'}>
          <button className="bg-[#FEF3EB] px-5 py-2 rounded-lg font-medium text-[#F7731C] text-center text-base flex">
            <IoIosArrowRoundBack className="text-2xl" />
            Back to Home
          </button>
        </Link>
      </div>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        className="px-0 md:px-20"
      >
        <Box flex={2}>
          <CardSosmed />
        </Box>
        <CardSuggestion />
      </Stack>
    </Layout>
  );
};

export default WithRouter(ContentDetail);
