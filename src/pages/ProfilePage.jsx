import React, {useState, useEffect} from "react";
import { WithRouter } from "utils/Navigation";
import { apiRequest } from "utils/apiRequest";

import Layout from "components/Layout";
import CardSosmed from "components/CardSosmed";
import CardSuggestion from "components/CardSuggestion";
import { Stack, Box } from "@mui/material";
import Navbar from "components/Navbar";
import Sampul from "assets/bg-sampul-profile.svg";
import Profile from "assets/profile.png";

const ProfilePage = (props) => {
  const [data, setDatas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {username} = props.params
    apiRequest(`/users/${username}`,"get")
    .then((res) => {
      const results = res.data
      setDatas(results)
      console.log(results)


    })
    .catch((err) => {
      alert(err.toString())
    })
    .finally(() => {
      setLoading(false)
    })
  }


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
            <h2 className="font-semibold text-2xl text-secondary mb-1">
              {data.username}
            </h2>
            <p className="font-medium text-base text-secondary">{data.email}</p>
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
            {data.DetailCore?.map((item, index) =>(
              <CardSosmed
              key={item.ID}
              story={item.StoryDetail}
              storyPicture={item.StoryPicture}
              username={data.username}
              />
            ))}
          
            
          </Box>
          <CardSuggestion />
        </Stack>
      </div>
    </Layout>
  );
};

export default WithRouter(ProfilePage);
