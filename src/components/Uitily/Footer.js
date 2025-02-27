import React from "react";
import app from "../../images/app.png";
import google from "../../images/google.png";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#05ABF3] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a
              href="/"
              className="text-2xl font-semibold flex items-center mb-6"
            >
              Herfety
            </a>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a className="flex items-center gap-2">
                    <FaWhatsapp className="text-lg" />
                    <span>
                      WhatsApp <br /> +1 202-918-2132
                    </span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-2">
                    <IoIosCall className="text-lg" />
                    <span>
                      Call Us <br /> +1 202-918-2132
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Download App</h3>
            <div className="space-y-4">
              <img
                src={app}
                alt="App Store"
                className="object-cover rounded-lg w-36 h-12"
              />
              <img
                src={google}
                alt="Google Play"
                className="object-cover rounded-lg w-36 h-12"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
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

          <div>
            <h3 className="text-lg font-bold mb-4">Customer Services</h3>
            <ul className="space-y-2">
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
        <hr className="border-gray-400 my-6" />
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Herfety. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
