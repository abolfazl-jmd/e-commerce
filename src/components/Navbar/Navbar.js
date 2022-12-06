import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const shoppingCart = useSelector((state) => state.cart);

  return (
    <nav className="flex justify-between top-14 md:top-0 w-full gap-4 bg-background-dark text-secondary-light left-0 items-center text-2xl px-8 py-4">
      <NavLink className="text-2xl font-logo font-bold" to="/">
        <h2>Shopify</h2>
      </NavLink>

      <ul className="">
        <NavLink
          className="text-lg text-dark-lightest hover:text-secondary-light transition-all"
          to="/products"
          style={(isActive) => ({
            color: isActive ? "text-secondary-light" : "text-dark-lightest",
          })}
        >
          <li>Products</li>
        </NavLink>
      </ul>

      <ul className="flex align-center justify-evenly w-28">
        <NavLink className="text-base px-4 py-3" to="/profile">
          <li>
            <FaUserAlt />
          </li>
        </NavLink>
        <NavLink
          className="text-base bg-secondary px-4 py-3 rounded-md"
          to="/shopping-cart"
        >
          <li className="relative">
            {shoppingCart && (
              <span className="absolute flex items-center justify-center -top-6 -right-6 w-6 h-6 bg-red-600 text-white rounded-full">
                {shoppingCart.length}
              </span>
            )}
            <FaShoppingCart />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
