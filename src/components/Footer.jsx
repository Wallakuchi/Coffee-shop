import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const border = "border border-solid border-[rgba(255,255,255,.3)]";
  const icon = `h-[50px] w-[50px] leading-[50px] text-[20px] text-white m-[3px] rounded-full ${border} flex justify-center items-center hover:bg-[#d3ad7f]`;

  const link = `py-[7px] px-5 text-white ${border} text-[20px] hover:bg-[#d3ad7f]`

  return (
    <div className="flex flex-col px-[7%] py-5 text-white bg-[#13131a] text-center">
      <div className="flex justify-center py-[10px]">
        <div className={icon}>
          <FaFacebook />
        </div>
        <div className={icon}>
          <FaTwitter />
        </div>
        <div className={icon}>
          <FaInstagram />
        </div>
        <div className={icon}>
          <FaLinkedin />
        </div>
        <div className={icon}>
          <FaPinterest />
        </div>
      </div>

      <div className="flex justify-center flex-wrap py-5 gap-[10px]">
        <Link className={link} to="#">Home</Link>
        <Link className={link} to="#">About</Link>
        <Link className={link}  to="#">Menu</Link>
        <Link className={link} to="#">Products</Link>
        <Link className={link} to="#">Peview</Link>
        <Link className={link} to="#">Contact</Link>
        <Link className={link} to="#">Blogs</Link>
      </div>

      <div className="text-[20px] text-white font-extralight p-[15px]">
        Created By <span className="text-[#d3ad7f]"> Mr. Web Designer</span> | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
