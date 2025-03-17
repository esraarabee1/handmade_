import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdOutlineShoppingCart,
  MdPeopleOutline,
  MdInventory2,
  MdBusinessCenter,
  MdSettings,
  MdLogout,
} from "react-icons/md";

const VendorSideBar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Orders", path: "/vendor/orders", icon: <MdOutlineShoppingCart /> },
    { name: "Inventory", path: "/vendor/inventory", icon: <MdInventory2 /> },
  ];

  return (
    <div className="h-screen w-[296px] bg-white text-black  flex flex-col shadow-lg">
      {/* Logo */}
      <div className="flex gap-4 items-center p-6 text-2xl font-bold text-center text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="44"
          viewBox="0 0 45 44"
          fill="none"
        >
          <path
            d="M18.5081 8.0369C18.6184 8.26151 18.6913 8.50205 18.7239 8.74933L19.3272 17.7191L19.6267 22.2276C19.6298 22.6912 19.7025 23.1519 19.8425 23.5947C20.2042 24.4538 21.0743 24.9998 22.0209 24.9618L36.445 24.0183C37.0696 24.008 37.6728 24.2416 38.1218 24.6677C38.496 25.0228 38.7375 25.4873 38.8136 25.9869L38.8392 26.2903C38.2423 34.5555 32.1719 41.4493 23.9239 43.2289C15.6758 45.0085 7.21779 41.2492 3.14195 33.9922C1.96692 31.8839 1.23299 29.5665 0.983244 27.176C0.878912 26.4684 0.832972 25.7537 0.845872 25.0388C0.83299 16.1775 7.14327 8.51667 15.9765 6.66982C17.0396 6.50428 18.0818 7.06709 18.5081 8.0369Z"
            fill="#008ECC"
          />
          <path
            opacity="0.4"
            d="M24.3963 0.335027C34.276 0.586376 42.5796 7.69079 44.178 17.2599L44.1627 17.3305L44.1191 17.4332L44.1252 17.715C44.1025 18.0885 43.9583 18.4478 43.7099 18.738C43.4511 19.0403 43.0975 19.2461 42.7081 19.3261L42.4706 19.3586L25.8289 20.4369C25.2754 20.4915 24.7242 20.313 24.3125 19.9458C23.9695 19.6398 23.7502 19.2268 23.6882 18.7817L22.5712 2.16422C22.5518 2.10803 22.5518 2.04712 22.5712 1.99093C22.5865 1.53287 22.7881 1.0999 23.1311 0.78875C23.474 0.477595 23.9297 0.314184 24.3963 0.335027Z"
            fill="#FFCC91"
          />
        </svg>
        Metrix
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`flex items-center gap-4 px-6 py-4 text-lg rounded-md transition-all ${
              location.pathname === link.path
                ? "bg-blue-100 text-blue-600 shadow-md"
                : "hover:bg-gray-100"
            }`}
          >
            <span className="text-2xl">{link.icon}</span> {/* الأيقونة */}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-6">
        <button
          onClick={() => alert("Logging out...")}
          className="flex items-center gap-4 w-full px-6 py-4 text-lg rounded-md bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all"
        >
          <MdLogout className="text-2xl text-blue-500 group-hover:text-white" />{" "}
          <span className="group-hover:text-white">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default VendorSideBar;
