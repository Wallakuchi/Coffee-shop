import { useAppContext } from "../contexts/AppContext";
import { CartFunc } from "../utilities";
import Button from "./Button";

const Cart = () => {
  const { activeCart } = useAppContext();
  return (
    <div
      className={`absolute top-full -right-full h-[calc(100vh-5.9rem)] w-[350px] bg-white px-[15px] ${
        activeCart ? "-right-0" : ""
      }`}
    >
      <CartFunc />
      <div className="text-center pt-4">
        <Button value="Checkout Now" href="#" />
      </div>
    </div>
  );
};

export default Cart;
