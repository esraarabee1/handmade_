import React from "react";
import app from "../../images/app.png";
import google from "../../images/google.png";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#05ABF3] text-white py-10">
      <div className="container mx-auto px-6">
        <div
          className="flex flex-col md:flex-row flex-wrap gap-10 
                items-center justify-center text-center 
                md:items-start md:justify-between md:text-left"
        >
          {/* Logo & Contact */}
          <div className=" flex-1 min-w-[220px]">
            <a href="/" className="text-2xl font-bold block mb-6">
              Herfety
            </a>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm  flex flex-col items-center justify-center md:items-start md:justify-start">
              <li className="flex  gap-2">
                <FaWhatsapp className="text-xl mt-1" />
                <span>
                  WhatsApp <br /> +1 202-918-2132
                </span>
              </li>
              <li className="flex  gap-2">
                <IoIosCall className="text-xl mt-1" />
                <span>
                  Call Us <br /> +1 202-918-2132
                </span>
              </li>
            </ul>
          </div>

          {/* App Download */}
          <div className="flex-1 min-w-[220px]">
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <div className="space-y-4 flex flex-col items-center justify-center md:items-start md:justify-start">
              <img
                src={app}
                alt="App Store"
                className="object-contain rounded-lg w-36 h-12"
              />
              <img
                src={google}
                alt="Google Play"
                className="object-contain rounded-lg w-36 h-12"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex-1 min-w-[220px]">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Souvenirs & Keepsakes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Jewelry & Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Home Décor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fashion & Textiles
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Art & Collectibles
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kids’ Crafts & Toys
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Services */}
          <div className="flex-1 min-w-[220px]">
            <h3 className="text-lg font-semibold mb-4">Customer Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  E-waste Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cancellation & Return Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copy */}
        <hr className="border-white/30 my-8" />
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Herfety. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
