import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "pages/Login";
import Register from "pages/Register"
import HomePage from "pages/HomePage";
import ProfilePage from "pages/ProfilePage"
import NotFound from "pages/NotFound";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
