import React from "react";
import { WithRouter } from "utils/Navigation";

import Layout from "components/Layout";
import CardSosmed from "components/CardSosmed";
import CardUpload from "components/CardUpload";
import CardSuggestion from "components/CardSuggestion";
import Navbar from "components/Navbar";
import { Stack, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Layout>
      <Navbar></Navbar>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        className="px-0 md:px-20"
      >
        <Box flex={2}>
          <CardUpload></CardUpload>
          <CardSosmed></CardSosmed>
        </Box>
        <CardSuggestion></CardSuggestion>
      </Stack>
    </Layout>
  );
};

export default WithRouter(HomePage);
