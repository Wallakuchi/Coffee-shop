import {
  FaShoppingCart,
  FaTimes,
  FaHeart,
  FaEye,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

export const content = [
  { navContent: "Home", navRoute: "#home" },
  { navContent: "About", navRoute: "#about" },
  { navContent: "Menu", navRoute: "#menu" },
  { navContent: "Products", navRoute: "#products" },
  { navContent: "Review", navRoute: "#review" },
  { navContent: "Contact", navRoute: "#contact" },
  { navContent: "Blogs", navRoute: "#blogs" },
];

// Data for menu component

export const menuData = [
  {
    item: "1",
    description: "tea-1",
    title: "tasty and healty",
    disCost: "$15.99",
    realCost: "20.99",
    imgLink: "images/menu-1.png",
  },
  {
    item: "2",
    description: "tea-2",
    title: "tasty and healty",
    disCost: "$15.99",
    realCost: "20.99",
    imgLink: "images/menu-2.png",
  },
  {
    item: "3",
    description: "tea-3",
    title: "tasty and healty",
    disCost: "$15.99",
    realCost: "20.99",
    imgLink: "images/menu-3.png",
  },
  {
    item: "4",
    description: "tea-4",
    title: "tasty and healty",
    disCost: "$15.99",
    realCost: "20.99",
    imgLink: "images/menu-4.png",
  },
  {
    item: "5",
    description: "tea-5",
    title: "tasty and healty",
    disCost: "$15.99",
    realCost: "20.99",
    imgLink: "images/menu-5.png",
  },
  {
    item: "6",
    description: "tea-6",
    title: "tasty and healty",
    disCost: "$15.99",
    realCost: "20.99",
    imgLink: "images/menu-6.png",
  },
];

// Data for Product component
export const productData = [
  {
    item: "1",
    icon1: <FaShoppingCart />,
    icon2: <FaHeart />,
    icon3: <FaEye />,
    imgLink: "images/product-1.png",
    title: "fresh coffee",
    disRate: "$15.99",
    orgRate: "$20.99",
    description: "img",
    starArr: [1, 2, 3, 4],
    starIcon: <FaStar />,
    halfIcon: <FaStarHalfAlt />,
  },
  {
    item: "2",
    icon1: <FaShoppingCart />,
    icon2: <FaHeart />,
    icon3: <FaEye />,
    imgLink: "images/product-2.png",
    title: "fresh coffee",
    disRate: "$15.99",
    orgRate: "$20.99",
    description: "img",
    starArr: [1, 2, 3, 4],
    starIcon: <FaStar />,
    halfIcon: <FaStarHalfAlt />,
  },
  {
    item: "3",
    icon1: <FaShoppingCart />,
    icon2: <FaHeart />,
    icon3: <FaEye />,
    imgLink: "images/product-3.png",
    title: "fresh coffee",
    disRate: "$15.99",
    orgRate: "$20.99",
    description: "img",
    starArr: [1, 2, 3, 4],
    starIcon: <FaStar />,
    halfIcon: <FaStarHalfAlt />,
  },
];

//Data for review

export const reviewData = [
  {
    customer: 1,
    dataImg: "images/quote-img.png",
    customerPic: "images/pic-1.png",
    name: "john Deo",
    starArr: [1, 2, 3, 4],
    starIcon: <FaStar />,
    halfIcon: <FaStarHalfAlt />,
    description: "img",
  },
  {
    customer: 2,
    dataImg: "images/quote-img.png",
    customerPic: "images/pic-2.png",
    name: "john Deo",
    starArr: [1, 2, 3, 4],
    starIcon: <FaStar />,
    halfIcon: <FaStarHalfAlt />,
    description: "img",
  },
  {
    customer: 3,
    dataImg: "images/quote-img.png",
    customerPic: "images/pic-3.png",
    name: "john Deo",
    starArr: [1, 2, 3, 4],
    starIcon: <FaStar />,
    halfIcon: <FaStarHalfAlt />,
    description: "img",
  },
];

//blog Data

export const blogData = [
  {
    customer: 1,
    dataImg: "images/blog-1.jpeg",
    title: "tasty and refreshing coffee",
    by: "by admin",
    date: " 21st May, 2021",
    feedback:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.",
    description: "img",
  },
  {
    customer: 2,
    dataImg: "images/blog-2.jpeg",
    title: "tasty and refreshing coffee",
    by: "by admin",
    date: "21st May, 2021",
    feedback:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.",
    description: "img",
  },
  {
    customer: 3,
    dataImg: "images/blog-3.jpeg",
    title: "tasty and refreshing coffee",
    by: "by admin",
    date: "21st May, 2021",
    feedback:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.",
    description: "img",
  },
];

//cart data
export const cartData = [
  {
    cart: 1,
    productImg: "images/cart-item-1.png",
    title: "Cart Item 01",
    description: "img",
    price: "$15/-",
    cross: <FaTimes />,
  },
  {
    cart: 2,
    productImg: "images/cart-item-2.png",
    title: "Cart Item 02",
    description: "img",
    price: "$15/-",
    cross: <FaTimes />,
  },
  {
    cart: 3,
    productImg: "images/cart-item-3.png",
    title: "Cart Item 03",
    description: "img",
    price: "$15/-",
    cross: <FaTimes />,
  },
  {
    cart: 4,
    productImg: "images/cart-item-4.png",
    title: "Cart Item 04",
    description: "img",
    price: "$15/-",
    cross: <FaTimes />,
  },
];
