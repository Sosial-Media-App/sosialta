import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "pages/Login";
import Register from "pages/Register"
import HomePage from "pages/HomePage";
import ProfilePage from "pages/ProfilePage"
import MyProfile from "pages/MyProfile"
import NotFound from "pages/NotFound";
import ContentDetail from "pages/ContentDetail"
import HomeAnonym from "pages/HomeAnonym"

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeAnonym />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/detail" element={<ContentDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
