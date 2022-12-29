import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "../utilities";
import { Cart, Search } from "../components";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const {
    setActiveSearch,
    setMenuBar,
    activeSearch,
    activeCart,
    setActiveCart,
    menuBar,
  } = useAppContext();

  return (
    <div className="flex items-center justify-between border-b bg-[#13131a] fixed top-0 left-0 right-0 px-[7%] py-4 border-[rgba(255,255,255,.3)] z-[1000]">
      <Link to="#home" className="mr-3" reloadDocument>
        <img className="min-w-full h-16" src="images/logo.png" alt="logo" />
      </Link>

      <div
        className={`flex items-center gap-x-6 text-base flex-wrap text-white max-md:absolute max-md:top-full max-md:-right-full max-md:bg-white max-md:w-[15rem] max-md:h-[calc(100vh-5.9rem)] max-md:block ${
          menuBar ? "max-md:-right-0" : ""
        }`}
      >
        <NavLink />
      </div>

      <div className="flex items-center text-3xl max-md:text-[24px] flex-wrap text-white">
        <div
          className="ml-5 cursor-pointer hover:text-[#d3ad7f]"
          onClick={() => setActiveSearch(!activeSearch)}
        >
          <FaSearch />
        </div>
        <div
          className="ml-5 cursor-pointer hover:text-[#d3ad7f]"
          onClick={() => setActiveCart(!activeCart)}
        >
          <FaShoppingCart />
        </div>
        <div
          className="ml-5 cursor-pointer hidden max-md:block hover:text-[#d3ad7f]"
          onClick={() =>setMenuBar(!menuBar)}
        >
          <FaBars />
        </div>
      </div>

      <Search />
      <Cart />
    </div>
  );
};

export default Header;
