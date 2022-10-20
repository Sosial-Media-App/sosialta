import React,{ useState, useEffect } from "react";
import { WithRouter } from "utils/Navigation";
import { Link } from "react-router-dom";
import { apiRequest } from "utils/apiRequest";

import Layout from "components/Layout";
import CardSosmed from "components/CardSosmed";
import CardUpload from "components/CardUpload";
import CardSuggestion from "components/CardSuggestion";
import NavbarAnonym from "components/NavbarAnonym";
import { Stack, Box } from "@mui/material";

const HomeAnonym = (props) => {
  const [datas, setDatas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    apiRequest("contents","get",{})
    .then((res) => {
      const  results  = res.data
      setDatas(results)

    })
    .catch((err) => {
      const { data } = err.response;
        alert(data.message);
    })
    .finally(() => {
      setLoading(false)
    })
  }

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Layout>
      <NavbarAnonym></NavbarAnonym>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        className="px-0 md:px-20"
      >
        <Box flex={2}>
        <label
            htmlFor="my-modal-3"
            className="btn-modal hover:cursor-pointer">
          <CardUpload></CardUpload>
        </label>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative flex flex-col justify-center text-center">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <p className="text-3xl text-secondary font-bold">
                See what's happening
              </p>
              <p className="py-3 text-xs text-secondary">
                Join sosialita to get all acces with the live social moments to
                each other
              </p>
              <Link to="/login">
                <button className="btn normal-case hover:bg-secondary bg-primary rounded-full w-full my-2">
                  Log In
                </button>
              </Link>
              <Link to="/register">
                <button className="btn normal-case text-primary hover:bg-secondary bg-white border-gray rounded-full w-full my-2">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>


          <label
            htmlFor="my-modal-3"
            className="btn-modal hover:cursor-pointer">
            {datas.map((data) => (
            <CardSosmed
            key={data.id}
            username={data.username}
            story={data.story_detail}
            storyPicture={data.story_picture}
            />
            ))}
          </label>

          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative flex flex-col justify-center text-center">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <p className="text-3xl text-secondary font-bold">
                See what's happening
              </p>
              <p className="py-3 text-xs text-secondary">
                Join sosialita to get all acces with the live social moments to
                each other
              </p>
              <Link to="/login">
                <button className="btn normal-case hover:bg-secondary bg-primary rounded-full w-full my-2">
                  Log In
                </button>
              </Link>
              <Link to="/register">
                <button className="btn normal-case text-primary hover:bg-secondary bg-white border-gray rounded-full w-full my-2">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </Box>

        <CardSuggestion/>
      </Stack>
    </Layout>
  );
};

export default WithRouter(HomeAnonym);
