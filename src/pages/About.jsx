import { Button } from "../components";

const About = () => {
  const para = "text-[#ccc] text-base py-[10px] leading-[1.8] text-justify";
  return (
    <div className="flex flex-col px-[7%] py-5" id="about">
      <h1 className="text-center text-white uppercase pb-9 text-[40px] font-semibold">
        <span className="text-[#d3ad7f]">About</span>&nbsp;
        <span>Us</span>
      </h1>

      <div className="flex items-center bg-[#13131a] flex-wrap">
        <div className="flex grow basis-[450px] shrink">
          <img src="images/about-img.jpeg" className="w-full" alt="about-img" />
        </div>

        <div className="flex grow shrink basis-[450px] flex-col p-5">
          <h3 className="text-[30px] text-white font-semibold">
            What Makes Our Coffee Special?
          </h3>
          <p className={para}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            praesentium eligendi fugit voluptas, error enim placeat recusandae
            molestiae repudiandae ipsa, ipsum aliquam obcaecati, quasi debitis
            pariatur labore dolore qui ea.
          </p>
          <p className={para}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            praesentium eligendi fugit voluptas, error enim placeat recusandae.
          </p>
          <Button value="Learn More" href="/about" />
        </div>
      </div>
    </div>
  );
};

export default About;
