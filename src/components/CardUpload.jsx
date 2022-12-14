import React from "react";

import { Box } from "@mui/material";
import { AiFillPicture } from "react-icons/ai";
import { MdArticle } from "react-icons/md";

const CardUpload = (props) => {
  return (
    <Box flex={4} p={2}>
      <div className="p-5 bg-white rounded-xl">
        <div className="relative flex flex-row mb-4">
          <div>
            <img
              className="rounded-full max-w-none w-12 h-12"
              src="https://randomuser.me/api/portraits/men/35.jpg"
              alt="Gambar"
            />
          </div>
          <input
            className="pt-2 pb-2 pl-3 w-full bg-main rounded-full placeholder:text-slate-600 font-medium pr-20 mx-3"
            type="text"
            placeholder="What's on your mind?"
          />
          <button className="btn bg-primary rounded-full py-2 border-none hover:bg-[#F8863A] px-10 font-medium font-semi-bold text-white " 
          onClick={props.onClick}
          >
            Post
          </button>
        </div>
        <div className="flex flex-row space-x-3">
          <button className="flex flex-row rounded-lg p-1 px-3 space-x-2 bg-line">
            <AiFillPicture className="h-6 w-5" />
            <p>Picture</p>
          </button>
          <button className="flex flex-row rounded-lg p-1 px-3 space-x-2 bg-line">
            <MdArticle className="w-5 h-5" />
            <p>Article</p>
          </button>
        </div>
      </div>
    </Box>
  );
};

export default CardUpload;
