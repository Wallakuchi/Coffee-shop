import React from "react";
import { BlogItems } from "../utilities";

const Blogs = () => {
  return (
    <div className="flex flex-col px-[7%] py-5 text-white" id="blogs">
      <h1 className="text-center text-white uppercase pb-9 text-[40px] font-semibold">
        <span>our</span>
        <span className="text-[#d3ad7f]"> blogs</span>
      </h1>
      <div className="grid grid-cols-fluid gap-4 text-base">
        <BlogItems />
      </div>
    </div>
  );
};

export default Blogs;
