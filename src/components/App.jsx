import React from "react";
import NavBar from "./navbar/nav.component";
import Sneaker from "./main/Sneaker.component";
import Cart from "./cart/Cart.component";

const App = () => {
  
  return (
    <div className="relative">
      <Cart />
      <NavBar />
      <Sneaker />
    </div>
  );
};

export default App;
