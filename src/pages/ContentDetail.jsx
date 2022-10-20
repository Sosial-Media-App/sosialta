import React, { useEffect, useState } from "react";
import { WithRouter } from "utils/Navigation";
import { Link } from "react-router-dom";
import { apiRequest } from "utils/apiRequest";

import Layout from "components/Layout";
import Navbar from "components/Navbar";
import CardSosmed from "components/CardSosmed";
import CardSuggestion from "components/CardSuggestion";
import { Stack, Box } from "@mui/material";
import { IoIosArrowRoundBack } from "react-icons/io";

const ContentDetail = (props) => {
  const [data, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {id_content} = props.params
    apiRequest(`contents/${id_content}`, "get", {})
      .then((res) => {
        const results = res.data
        setDatas(results)
        console.log(results)
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <h2 className="text-secondary p-4">Loading...</h2>
  }

  return (
    <Layout>
      <Navbar />
      <div className="w-full px-5 md:px-16 py-3">
        <Link to={"/home"}>
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
          
            <CardSosmed
              key={data.id}
              username={data.username}
              story={data.story_detail}
              storyPicture={data.story_picture}
            />
        
        </Box>
        <CardSuggestion />
      </Stack>
    </Layout>
  );
};

export default WithRouter(ContentDetail);
