import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

export const WithRouter = (Component) => {
  const Wrapper = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    return <Component {...props} navigate={navigate} location={location} />;
  };

  return Wrapper;
};
