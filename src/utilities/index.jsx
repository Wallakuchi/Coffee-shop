import { Link } from "react-router-dom";
import {
  blogData,
  cartData,
  content,
  menuData,
  productData,
  reviewData,
} from "../constants";
import { Button } from "../components";
import _ from "lodash";
import { useAppContext } from "../contexts/AppContext";

export const NavLink = () => {
  const { menuBar, setMenuBar } = useAppContext();
  return content.map((value) => (
    <Link
      key={value.navContent}
      className={`hover:text-[#d3ad7f] hover:border-b-[#d3ad7f] hover:border-b hover:border-b-solid hover:pb-[4px] max-md:text-[#13131a] max-md:p-[.2rem] max-md:text-lg max-md:block max-md:m-[.8rem]`}
      to={value.navRoute}
      reloadDocument
      onClick={() => setMenuBar(!menuBar)}
    >
      {value.navContent}
    </Link>
  ));
};

export const MenuItems = () => {
  return menuData.map((value, index) => (
    <div
      key={value.item}
      className="group p-[50px] text-center border border-solid border-[rgba(255,255,255,.3)]   hover:bg-white"
    >
      <img
        className="h-[100px] inline-block"
        src={value.imgLink}
        alt={value.description}
      />
      <h3 className="text-white text-[20px] py-[10px] font-semibold group-hover:text-black">
        {_.startCase(value.title)}
      </h3>
      <div className="text-white text-[25px] py-[5px] mb-3 group-hover:text-black">
        {value.disCost}{" "}
        <span className="text-[15px] line-through font-extralight group-hover:text-black">
          {value.realCost}
        </span>
      </div>
      <Button value="add to cart" />
    </div>
  ));
};

export const ProductItems = () => {
  const border = "border border-solid border-[rgba(255,255,255,.3)]";
  const iconStyle =
    "flex items-center justify-center h-[50px] w-[50px] leading-[50px] text-[20px] color-white m-[3px] hover:bg-[#d3ad7f]";

  return productData.map((value) => (
    <div key={value.item} className={`p-[20px] text-center ${border}`}>
      <div className="flex gap-x-1 justify-center">
        <Link to="#" className={`${iconStyle} ${border} `}>
          {value.icon1}
        </Link>
        <Link to="#" className={`${iconStyle} ${border}`}>
          {value.icon2}{" "}
        </Link>
        <Link to="#" className={`${iconStyle} ${border}`}>
          {value.icon3}{" "}
        </Link>
      </div>

      <img
        className="py-[25px] inline-block"
        src={value.imgLink}
        alt={value.description}
      />

      <h3 className="text-white text-[25px] font-semibold">
        {_.startCase(value.title)}
      </h3>

      <div className="flex py-[15px] justify-center">
        {value.starArr.map((val) => (
          <div key={val} className="text-[17px] text-[#d3ad7f]">
            {value.starIcon}
          </div>
        ))}
        <div className="text-[17px] text-[#d3ad7f]">{value.halfIcon}</div>
      </div>

      <div className="text-white text-[25px] py-[5px] mb-3 group-hover:text-black">
        {value.disRate}{" "}
        <span className="text-[15px] line-through font-extralight group-hover:text-black">
          {value.orgRate}
        </span>
      </div>
      <Button value="add to cart" />
    </div>
  ));
};

export const ReviewItems = () => {
  const border = "border border-solid border-[rgba(255,255,255,.3)]";

  return reviewData.map((value) => (
    <div
      key={value.customer}
      className={`px-[20px] py-[30px] text-center ${border}`}
    >
      <img
        className="inline-block"
        src={value.dataImg}
        alt={value.description}
      />

      <p className="text-base leading-7 text-[#ccc] py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        voluptatibus recusandae excepturi perspiciatis eaque maiores provident
        numquam cupiditate ipsum deserunt consectetur?
      </p>

      <img
        className="h-[70px] w-[70px] rounded-full object-cover inline-block"
        src={value.customerPic}
        alt={value.description}
      />

      <h3 className="text-white text-xl font-semibold py-[10px]">
        {_.startCase(value.name)}
      </h3>

      <div className="flex justify-center">
        {value.starArr.map((val) => (
          <div key={val} className="text-[15px] text-[#d3ad7f]">
            {value.starIcon}
          </div>
        ))}
        <div className="text-[15px] text-[#d3ad7f]">{value.halfIcon}</div>
      </div>
    </div>
  ));
};

export const BlogItems = () => {
  const border = "border border-solid border-[rgba(255,255,255,.3)]";

  return blogData.map((value) => (
    <div key={value.customer} className={`${border} group hover:transform`}>
      <div className="h-[250px] overflow-hidden w-full">
        <img
          className="inline-block h-full object-cover w-full group-hover:scale-[1.2]"
          src={value.dataImg}
          alt={value.description}
        />
      </div>

      <div className="p-5">
        <Link className="text-white text-2xl font-semibold leading-4 hover:text-[#d3ad7f] ">
          {_.startCase(value.title)}
        </Link>

        <span className="block pt-[10px] text-[20px] text-[#d3ad7f]">
          {_.startCase(value.by)}
          {" / "}
          {_.startCase(value.date)}
        </span>

        <p className="text-base leading-[1.8] text-[#ccc] py-[10px]">
          {value.feedback}
        </p>

        <div className="flex">
          <Button value="Read More" href="#" />
        </div>
      </div>
    </div>
  ));
};

export const CartFunc = () => {
  return cartData.map((value) => (
    <div
      key={value.cart}
      className="relative my-5 flex items-center gap-[15px]"
    >
      <span className="absolute top-[10px] right-[10px] text-[20px] cursor-pointer text-[#13131a] hover:text-[#d3ad7f]">
        {value.cross}
      </span>
      <img src={value.productImg} alt="img" className="h-[70px]" />
      <div className="">
        <h3 className="text-[20px] text-[#13131a] pb-[5px]">{value.title}</h3>
        <div className="text-15px] text-[#d3ad7f]">{value.price}</div>
      </div>
    </div>
  ));
};
