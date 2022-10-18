import React from "react";
import { WithRouter } from "utils/Navigation";
import { Link } from "react-router-dom";

import Layout from "components/Layout";
import Navbar from "components/Navbar";

const NotFound = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="text-center">
          <h2 className="text-secondary font-bold text-5xl mt-40">
            404 - Looks like you’re lost.
          </h2>
          <p className="text-secondary mt-8 text-sm font-medium">
            Maybe this page used to exist or you just spelled something wrong.
            <br />
            Chances are you Spelled something wrong, so you can double check the
            URL?
          </p>
          <Link to={"/"}>
            <button className="mt-11 text-xs px-14 py-3 rounded-3xl text-white font-semibold bg-primary">
              RETURN TO HOME
            </button>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default WithRouter(NotFound);
