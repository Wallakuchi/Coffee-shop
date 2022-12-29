import { Link } from "react-router-dom";
import _ from 'lodash'

const Button = ({ value, href }) => {
  return (
    <Link
      to={href}
      className="py-[8px] px-[30px] mt-[10px] text-[17px] text-white bg-[#d3ad7f] cursor-pointer w-44 hover:tracking-[2px] hover:w-[180px] group-hover:text-black"
    >
      {_.startCase(value)}
    </Link>
  );
};
export default Button;
