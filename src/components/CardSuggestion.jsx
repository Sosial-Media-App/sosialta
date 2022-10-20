import React from "react";

import Box from '@mui/material/Box';
import Image from "assets/profile.jpg";

const CardSuggestion = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <div className="p-5 bg-white rounded-xl fixed">
        <h2 className="text-secondary font-semibold text-base">
          Suggesions for you
        </h2>
        <div className="flex items-center mt-7">
          <div className="w-10 rounded-full">
            <img src={Image} alt="" />
          </div>
          <h5 className="text-secondary font-semibold text-sm ml-3">
            Adam Malik
          </h5>
          <button className="bg-line px-4 py-1.5 rounded-lg font-medium text-sm ml-40">
            Ikuti
          </button>
        </div>
        <div className="flex items-center mt-7">
          <div className="w-10 rounded-full">
            <img src={Image} alt="" />
          </div>
          <h5 className="text-secondary font-semibold text-sm ml-3">
            Adam Malik
          </h5>
          <button className="bg-line px-4 py-1.5 rounded-lg font-medium text-sm ml-40">
            Ikuti
          </button>
        </div>
        <div className="flex items-center mt-7">
          <div className="w-10 rounded-full">
            <img src={Image} alt="" />
          </div>
          <h5 className="text-secondary font-semibold text-sm ml-3">
            Adam Malik
          </h5>
          <button className="bg-line px-4 py-1.5 rounded-lg font-medium text-sm ml-40">
            Ikuti
          </button>
        </div>
        <div className="text-center mt-4">
          <button className="font-semibold text-primary text-base">Show More</button>
        </div>
      </div>
    </Box>
  );
};

export default CardSuggestion;
