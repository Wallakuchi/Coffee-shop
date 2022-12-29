import React from "react";
import { Button } from "../components";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { AiTwotonePhone } from "react-icons/ai";

const Contact = () => {
  const border = "border border-solid border-[rgba(255,255,255,.3)]";
  const inputBox = "flex items-center my-2 bg-[#010103]";
  const input = "w-full p-[18px] text-[17px] text-white transform-none bg-[#010103] outline-0";
  return (
    <div className="flex flex-col px-[7%] py-5 text-white" id="contact">
      <h1 className="text-center text-white uppercase pb-9 text-[40px] font-semibold">
        <span className="text-[#d3ad7f]">Contact</span>
        <span> us</span>
      </h1>

      <div className="flex bg-[#13131a] flex-wrap gap-[10px]">
        <iframe
          className="flex grow shrink basis-[450px] w-full object-cover"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.061204959436!2d77.1674309!3d28.65788599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02f38f084a49%3A0x16e3a3942005d0c5!2sRamjas%20Sports%20Complex!5e0!3m2!1sen!2sin!4v1672120962617!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>

        <form className="flex flex-col grow shrink basis-[450px] py-[50px] px-[20px] text-center">
          <h3 className="uppercase text-[35px] text-white font-semibold mb-1">
            get in touch
          </h3>

          <div className={`${inputBox} ${border}`}>
            <span className="text-white text-[24px] pl-5">
              <FaUser />
            </span>
            <input className={`${input}`} type="text" placeholder="name" />
          </div>
          <div className={`${inputBox} ${border}`}>
            <span className="text-white text-[24px] pl-5">
              <FaEnvelope />
            </span>
            <input className={`${input}`} type="text" placeholder="email" />
          </div>
          <div className={`${inputBox} ${border}`}>
            <span className="text-white text-[24px] pl-5">
              <AiTwotonePhone />
            </span>
            <input className={`${input}`} type="number" placeholder="number" />
          </div>
          <div className="flex justify-center mt-2">
            <Button value="contact now" href="#" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
