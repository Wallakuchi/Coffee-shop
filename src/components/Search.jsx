import { FaSearch } from "react-icons/fa";
import { useAppContext } from "../contexts/AppContext";

const Search = () => {
  const { activeSearch } = useAppContext();
  return (
    <div
      className={`absolute top-[115%] right-[7%] bg-white w-[500px] h-[50px] flex items-center origin-top scale-y-0 max-md:w-[90%] max-md:right-4 ${
        activeSearch ? "scale-y-100" : ""
      } `}
    >
      <input
        type="search"
        id="search-box"
        placeholder="search here..."
        className="h-full w-full text-base p-[10px] transform-none text-[#13131a] outline-none"
      />
      <label
        htmlFor="search-box"
        className=" cursor-pointer text-[22px] mr-[15px] text-[#13131a] hover:text-[#d3ad7f]"
      >
        <FaSearch />
      </label>
    </div>
  );
};
export default Search;
