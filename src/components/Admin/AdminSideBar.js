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
} from "react-icons/md"; // استيراد الأيقونات من react-icons

const AdminSideBar = () => {
  const location = useLocation();

  // قائمة الروابط مع الأيقونات
  const navLinks = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard /> },
    { name: "Orders", path: "/admin/orders", icon: <MdOutlineShoppingCart /> },
    { name: "Customers", path: "/admin/customers", icon: <MdPeopleOutline /> },
    { name: "Inventory", path: "/admin/inventory", icon: <MdInventory2 /> },
    { name: "Traders", path: "/admin/traders", icon: <MdBusinessCenter /> },
    { name: "Settings", path: "/admin/settings", icon: <MdSettings /> },
  ];

  return (
    <div className="h-screen w-80 bg-white text-black  flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold text-center bg-blue-600 text-white">
        Admin Panel
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
          onClick={() => alert("Logging out...")} // استبدل هذا بوظيفة تسجيل الخروج الحقيقية
          className="flex items-center gap-4 w-full px-6 py-4 text-lg rounded-md bg-red-500 text-white hover:bg-red-600 transition-all"
        >
          <MdLogout className="text-2xl" /> {/* أيقونة تسجيل الخروج */}
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSideBar;
