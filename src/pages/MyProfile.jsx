import React, { useState, useEffect } from "react";
import { WithRouter } from "utils/Navigation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiRequest } from "utils/apiRequest";

import Layout from "components/Layout";
import CardSosmed from "components/CardSosmed";
import { Stack, Box } from "@mui/material";
import Navbar from "components/Navbar";
import Sampul from "assets/bg-sampul-profile.svg";
import CardEditProfile from "components/CardEditProfile";

const MyProfile = (props) => {
  const { username } = props.params;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);
  // const [username, setUserName] = useState("");
  const [fullname, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    handleData();
  }, []);

  const fetchData = async () => {
    apiRequest(`/users/${username}`, "get", {})
      .then((res) => {
        const results = res.data;
        setDatas(results)
        console.log(results);
        // setDatas(results)
        // setPage(newPage)
      })
      .catch((err) => {
        const { data } = err.response;
        alert(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleData = async () => {
    apiRequest(`contents`, "get", {})
    .then((res) => {
      const  results  = res.data
      setDatas(results)
    })
    .catch((err) => {
      alert(err.toString());
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Layout>
      <Navbar onNavigate={() => handleLogout()} />
      <div>
        <div className="-m-12">
          <img src={Sampul} alt="background" />
        </div>
        <div className="mx-24 items-center grid grid-cols-7 ">
          <div className="w-44 h-44 rounded-full bg-black">
            <img src="" alt="profile" />
          </div>
          <div className="ml-6 mt-4">
            <p className="font-semibold text-2xl text-secondary mb-1"></p>
            <p className="font-medium text-base text-secondary">@jordynsaris</p>
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
          {datas.map((data) => (
          <CardSosmed
          key={data.id}
          username={data.username}
          story={data.story_detail}
          storyPicture={data.story_picture}
          />
          ))}

          </Box>
          <CardEditProfile />
        </Stack>
      </div>
    </Layout>
  );
};

export default WithRouter(MyProfile);
