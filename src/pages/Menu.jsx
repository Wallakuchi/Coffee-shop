import React from "react";
import { MenuItems } from "../utilities";

const Menu = () => {
  return (
    <div className="flex flex-col px-[7%] py-5 text-white" id="menu">
      <h1 className="text-center text-white uppercase pb-9 text-[40px] font-semibold">
        <span>Our</span>
        <span className="text-[#d3ad7f]"> Menu</span>
      </h1>
      <div className="grid grid-cols-fluid gap-4 text-base">
        <MenuItems />
      </div>
    </div>
  );
};

export default Menu;
