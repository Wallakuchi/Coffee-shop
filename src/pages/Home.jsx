import {Button} from "../components";

const Home = () => {
  const homeImg = "bg-[url('../../public/images/home-img.jpeg')]";

  return (
    <div
      className={`min-h-screen flex ${homeImg} bg-no-repeat bg-cover bg-center items-center px-[7%] py-5 max-md:bg-left max-md:justify-center max-md:text-center`}
      id="home"
    >
      <div className="max-w-[600px]">
        <h3 className="text-6xl uppercase text-white font-bold leading-[1.2] max-md:text-[2rem]">
          FRESH COFFEE IN THE MORNING
        </h3>
        <p className="text-xl font-extralight leading-[1.7] py-3 mb-5 text-zinc-200 max-md:text-[.7rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quo amet consectetur adipisicing elit .          
        </p>
        <Button value="Get Yours Now" href="#"/>
      </div>
    </div>
  );
};

export default Home;
