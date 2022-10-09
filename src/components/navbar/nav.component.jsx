/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ReactComponent as Sneekers } from "../../assets/images/logo.svg";
import { ReactComponent as Menu } from "../../assets/images/icon-menu.svg";
import { ReactComponent as Cart } from "../../assets/images/icon-cart.svg";
import {ReactComponent as Close } from "../../assets/images/icon-close.svg";
import Link from "./link.component";
import { useState } from "react";
const NavBar = () => {
  const { setToggleCart, toggleCart } = useContext(CartContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between gap-x-16 py-6 w-[85%] sm:border-b border-gray-200">
        <div className="flex gap-x-3 md:gap-x-8 items-center">
          <Menu onClick={
            () => {
              setToggle(!toggle);
            }
          } className="sm:hidden" />
          <Sneekers />
          <ul className={`absolute top-5 z-10 ${!toggle
            ? "-left-full":"left-0" 
          }
          space-y-4
          sm:space-y-2
          md:left-0
          z-20
          md:static
          bg-white-50 w-[40%] h-full sm:top-0 sm:relative sm:flex space-x-4 text-sm text-Darkgrayishblue`}>
            <Close 
              className="absolute top-5 right-5 sm:hidden"
            onClick={
              () => {
                setToggle(!toggle);
              }
            }/>
            <Link label={"Collections"} />
            <Link label={"Mens"} />
            <Link label={"Womens"} />
            <Link label={"About"} />
            <Link label={"Contact"} />
          </ul>
        </div>
        <div className="flex space-x-4 items-center md:space-x-8">
          <Cart
            className="z-10 -ml-9"
            onClick={() => setToggleCart(!toggleCart)}
          />
          <img
            src={require("../../assets/images/image-avatar.png")}
            className="w-7 h-7 -z-10"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
