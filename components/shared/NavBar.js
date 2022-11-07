import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";

import { useStateContext } from "../../context/StateContext";

const NavBar = () => {
  const { showCart, setShowCart, cartItems } = useStateContext();
  return (
    <header className="navbar-container">
      <p className="logo">
        <Link href="/">ME Headphones</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">
          {cartItems ? cartItems.length : 0}
        </span>
      </button>
      {showCart && <Cart />}
    </header>
  );
};

export default NavBar;
