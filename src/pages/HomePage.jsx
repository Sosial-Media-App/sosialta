import React,{ useState, useEffect } from "react";
import { WithRouter } from "utils/Navigation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleAuth } from "utils/redux/reducers/reducer";
import { apiRequest } from "utils/apiRequest";

import Layout from "components/Layout";
import CardSosmed from "components/CardSosmed";
import CardUpload from "components/CardUpload";
import CardSuggestion from "components/CardSuggestion";
import Navbar from "components/Navbar";
import { Stack, Box } from "@mui/material";


const HomePage = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [datas, setDatas] = useState([])
  const [userName, setUserName] = useState("")
  const [story, setStory] = useState("")
  const [storyPicture, setStoryPicture] = useState("")
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    apiRequest("contents","get",{})
    .then((res) => {
      const  results  = res.data
      setDatas(results)
      // setPage(newPage)
    })
    .catch((err) => {
      const { data } = err.response;
        if ([401, 403].includes(data.code)) {
          localStorage.removeItem("token");
          dispatch(handleAuth(false));
          navigate("/login");
        }
        alert(data.message)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const savePost = async (e) => {
    const body = {
      story
    }
    apiRequest("contents","post",body)
    .then((res) => {
      const { results } = res.data
      fetchData()
    })
    .catch((err) => {
      const {data} = err.response
      alert(data.message)
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
      <Navbar
        onNavigate={() => handleLogout()}
        onProfile={() => navigate(`/myprofile/${datas?.username}`)}
      />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        className="px-0 md:px-20"
      >
        <Box flex={2}>
          <CardUpload
          onClick={()=>savePost()}
          onSubmit={()=>savePost()}
          value={story}
          onChange={(e)=>setStory(e.target.value)}
          
          /> 

          {datas.map((data) => (
          <CardSosmed
          key={data.id}
          username={data.username}
          story={data.story_detail}
          storyPicture={data.story_picture}
          onNavigate={()=> navigate(`/profile/${data.username}`)}
          onDetail={() => navigate(`/detail/${data.id}`)}
          />
          ))}
        </Box>
        <CardSuggestion />
      </Stack>
    </Layout>
  );
};

export default WithRouter(HomePage);
