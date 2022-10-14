import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
