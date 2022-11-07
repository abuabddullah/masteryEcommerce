import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import {
  bannerData,
  footerBanner,
  products,
} from "./../components/shared/fakeDatas";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const addToCart = (product, quantity) => {
    const isProductExist = cartItems.find((item) => item._id === product._id);
    setTotalPrice(totalPrice + product.price * quantity);
    setTotalQuantities(totalQuantities + quantity);
    if (isProductExist) {
      // update quantity in cart
      const updatedCartItems = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, product]);
    }
    toast.success(`${qty} ${product.name} added`);
  };

  const removeFromCArt = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const restsCartItems = cartItems.filter((item) => item._id !== product._id);
    setCartItems(restsCartItems);
    setTotalPrice(totalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(totalQuantities - foundProduct.quantity);
    toast.error(`${foundProduct.name} removed`);
  };

  /**
   * 1. find the product in cartItems
   * 2. find its index in cartItems
   * 3. if value is to be increased then increase the quantity in cartItems,increase the total carted price & quantity
   * 4. if value is to be decreased then decrease the quantity in cartItems,decrease the total carted price & quantity
   *
   */
  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((item) => item._id === id);
    const restsCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      const updatedIncreasedProduct = {
        ...foundProduct,
        quantity: foundProduct.quantity + 1,
      };
      setCartItems([...restsCartItems, updatedIncreasedProduct]);
      setTotalPrice((prevPrice) => prevPrice + foundProduct.price);
      setTotalQuantities((prevQuantity) => prevQuantity + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        const updatedDecreasedProduct = {
          ...foundProduct,
          quantity: foundProduct.quantity - 1,
        };
        setCartItems([...restsCartItems, updatedDecreasedProduct]);
        setTotalPrice((prevPrice) => prevPrice - foundProduct.price);
        setTotalQuantities((prevQuantity) => prevQuantity - 1);
      }
    }
  };

  const incQty = () => {
    setQty((oldQty) => {
      const newQty = oldQty + 1;
      return newQty;
    });
  };

  const decQty = () => {
    setQty((oldQty) => {
      const newQty = oldQty - 1;
      if (newQty < 1) {
        return 1;
      }
      return newQty;
    });
  };
  return (
    <Context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        bannerData,
        products,
        footerBanner,
        cartItems,
        totalPrice,
        totalQuantities,
        setShowCart,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        showCart,
        qty,
        setQty,
        incQty,
        decQty,
        addToCart,
        toggleCartItemQuanitity,
        removeFromCArt,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
