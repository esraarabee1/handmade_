import React, { useState, useEffect } from "react";
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import deliverytruck from "../../images/deliverytruck.svg";
import Discount from "../../images/Discount.svg";
import logoherfetyone from "../../images/logoherfetyone.svg";
import lodoherfety from "../../images/lodoherfety.svg";
import NavbarSearchHook from "../../Hook/products/viewsearchProd-hook";

const Navbar = () => {
  const [OnChange, searchWord] = NavbarSearchHook();

  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");

  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 px-4 text-xs text-gray-500">
          <span>Welcome to worldwide Megamart!</span>
          <div className="flex space-x-4">
            <a
              href="/user/UserTrackOrderPage"
              className="flex items-center space-x-1 text-sm"
            >
              <img src={deliverytruck} className="h-4 w-4" alt="Delivery" />
              <span>Track your order</span>
            </a>
            <a href="/products" className="flex items-center space-x-1 text-sm">
              <img src={Discount} className="h-4 w-4" alt="Discount" />
              <span>All Offers</span>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex justify-between items-center py-3 px-4 border-t md:border-b border-gray-200">
          {/* Logo */}
          <a href="/" className="text-gray-600 text-lg flex items-center">
            <img src={logoherfetyone} className="h-8 mr-1" alt="Logo 1" />
            <img src={lodoherfety} className="h-8" alt="Logo 2" />
          </a>

          {/* Search Bar */}
          <input
            className="hidden md:flex flex-grow mx-2 px-3 py-1 border rounded-full shadow-sm text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            placeholder="Search essentials, groceries and more..."
            value={word}
            onChange={OnChange}
          />

          {/* Icons + Hamburger Menu */}
          <div className="flex space-x-4 items-center">
            <a
              href="/user/UserWhishlistPage"
              className="hidden md:flex items-center space-x-1 text-sm"
            >
              <GrFavorite className="text-red-500" />
              <span className="text-gray-600 hover:text-gray-900">
                Wishlist
              </span>
            </a>
            <a
              href="/cart"
              className="hidden md:flex items-center space-x-1 text-sm"
            >
              <IoCartOutline className="text-blue-500" />
              <span className="text-gray-600 hover:text-gray-900">Cart</span>
            </a>

            {/* User Profile Dropdown for Web */}
            <div className="relative hidden md:block">
              {user ? (
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="text-sm font-medium text-black bg-white px-4 py-1 rounded-md hover:bg-gray-100"
                >
                  <FaRegUser className="inline-block mr-1 text-blue-500" />
                  {user.userName}
                </button>
              ) : (
                <a href="/login" className="text-black hover:text-gray-700">
                  SignIn
                </a>
              )}

              {/* Dropdown Menu */}
              {userMenuOpen && user && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                  {user.roles[0] == "Customer" ? (
                    <a
                      href="/vendor/inventory"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      vendor Dashboard
                    </a>
                  ) : (
                    <a
                      href="/user/UserProfilePage"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      My Profile
                    </a>
                  )}
                  <button
                    onClick={logOut}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Categories Section (Desktop Only) */}
        <div className="hidden md:block py-2 px-4">
          <ul className="flex justify-center space-x-3 text-xs text-gray-600">
            {[
              "Offers",
              "Jewelry & Accessories",
              "Home Décor",
              "Fashion & Textiles",
              "Art & Collectibles",
              "Kids’ Crafts & Toys",
              "Custom Orders",
            ].map((category) => (
              <li
                key={category}
                className="px-2 py-1 bg-white rounded-full shadow-md cursor-pointer hover:bg-blue-100"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-14 left-0 w-full bg-white z-50 shadow-md rounded-b-lg h-auto max-h-[60vh] overflow-y-auto py-3">
            <input
              className="w-11/12 mx-auto block px-3 py-1 border rounded-full shadow-sm text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="text"
              placeholder="Search..."
              value={word}
              onChange={OnChange}
            />
            <div className="flex flex-col items-center space-y-2 mt-2">
              <a
                href="/user/UserTrackOrderPage"
                className="text-gray-600 hover:text-gray-900"
              >
                Track Order
              </a>
              <a href="/products" className="text-gray-600 hover:text-gray-900">
                All Offers
              </a>
              <a
                href="/user/UserWhishlistPage"
                className="text-gray-600 hover:text-gray-900"
              >
                Wishlist
              </a>
              <a href="/cart" className="text-gray-600 hover:text-gray-900">
                Cart
              </a>
              {user ? (
                <div className="text-center">
                  {user.roles[0] !== "Customer" ? (
                    <a
                      href="/admin/allproducts"
                      className="block text-gray-700 hover:text-gray-900"
                    >
                      Admin Dash
                    </a>
                  ) : (
                    <a
                      href="/user/UserProfilePage"
                      className="block text-gray-700 hover:text-gray-900"
                    >
                      My Profile
                    </a>
                  )}
                  <button
                    onClick={logOut}
                    className="block text-gray-700 hover:text-gray-900 mt-2"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <a href="/login" className="text-gray-600 hover:text-gray-900">
                  SignIn
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
