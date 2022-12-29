import { Footer, Header } from "../components";
import {
  About,
  Blogs,
  Contact,
  Home,
  Menu,
  Products,
  Review,
} from "./../pages";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blogs />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
