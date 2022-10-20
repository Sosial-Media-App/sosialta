import React from "react";
import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { handleAuth } from "utils/redux/reducers/reducer";

import Login from "pages/Login";
import Register from "pages/Register";
import HomePage from "pages/HomePage";
import ContentDetail from "pages/ContentDetail";
import ProfilePage from "pages/ProfilePage";
import MyProfile from "pages/MyProfile";
import NotFound from "pages/NotFound";
import HomeAnonym from "pages/HomeAnonym";
import { TokenContext } from "utils/context";

axios.defaults.baseURL = "http://3.0.183.167:3000";

const Index = () => {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      dispatch(handleAuth(true));
    } else {
      dispatch(handleAuth(false));
    }
    axios.defaults.headers.common["Authorization"] = getToken
      ? `Bearer ${getToken}`
      : "";
  }, [isLoggedIn]);

  return (
    <TokenContext.Provider value={jwtToken}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeAnonym />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/login" /> : <Register />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail" element={<ContentDetail />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
};

export default Index;
