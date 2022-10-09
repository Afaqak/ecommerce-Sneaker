import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { img1 } from "../image/images";
import { ReactComponent as Delete } from "../../assets/images/icon-delete.svg";
const Cart = () => {
  const { toggleCart, cart, setCart } = useContext(CartContext);

  return (
    <div
      className={`absolute
      transition-all duration-500 ease-out
    ${
      toggleCart ? "scale-100 opacity-100" : "scale-0 opacity-0"
    } flex flex-col gap-y-8
    w-[90%] bg-white-50 min-h-[24%] overflow-y-auto
    top-[26%] sm:left-[80%] sm:top-[30%]  sm:w-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
    bg-white z-10 
    bg-white rounded-lg shadow-2xl`}
    >
      <h2 className="border-b pl-4 pb-3">Cart</h2>
      <div className="px-5">
        {!cart.quantity ? (
          <h3 className="text-center text-Darkgrayishblue">
            Your cart is empty
          </h3>
        ) : (
          <div className="flex space-x-4 items-center justify-center">
            <img src={img1} alt="" className="w-[4rem] h-[4rem]" />
            <div className="font-kumbh">
              <h3 className="text-[0.7rem] text-Darkgrayishblue ">
                Fall Limited Edition Sneakers
              </h3>
              <div className="flex justify-between">
                <p className="text-sm text-Darkgrayishblue">
                  {`${cart.price} x ${cart.quantity} `}{" "}
                  <span className="font-bold  text-black-50">
                    {cart.total}
                  </span>
                </p>
                <Delete onClick={() => setCart({})} />
              </div>
            </div>
          </div>
        )}
      </div>
      <button className="bg-primary md:flex-2 text-white text-sm mb-4  font-bold py-2 px-3 rounded-[0.25rem] text-white-50 self-center w-[80%]">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
