import React from "react";
import { WithRouter } from "utils/Navigation";

import Layout from "components/Layout";
import Navbar from "components/Navbar";

const ProfilePage = () => {
  return (
    <Layout>
      <Navbar/>
      <div>ProfilePage</div>
    </Layout>
  );
};

export default WithRouter(ProfilePage);
