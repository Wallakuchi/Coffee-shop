import React from "react";
import { ReviewItems } from "../utilities";

const Review = () => {
  return (
    <div className="flex flex-col px-[7%] py-5 text-white" id="review">
      <h1 className="text-center text-white uppercase pb-9 text-[40px] font-semibold">
        <span>Customer's</span> 
        <span className="text-[#d3ad7f]"> Review</span>
      </h1>
      <div className="grid grid-cols-fluid gap-4 text-base">
        <ReviewItems />
      </div>
    </div>
  );
};

export default Review;
