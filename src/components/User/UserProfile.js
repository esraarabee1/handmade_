import React from "react";
import { Mail } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="max-w-screen mx-auto min-h-screen">
      <div className="bg-white p-6 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600">
              <img
                src=""
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Mahmoud Alaa</h2>
              <p className="text-gray-500">MahmoudAlaa.w@gmail.com</p>
            </div>
          </div>

          <button className=" bg-blue-500 text-white px-4 py-2 rounded-lg">
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nick Name
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Select Country</option>
              <option value="egypt">Egypt</option>
              <option value="usa">USA</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Language
            </label>
            <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Select Language</option>
              <option value="english">English</option>
              <option value="arabic">Arabic</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Time Zone
            </label>
            <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Select Time Zone</option>
              <option value="gmt">GMT</option>
              <option value="est">EST</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">My email Address</h3>
          <div className="flex items-center space-x-4 mt-2">
            <Mail className="text-blue-500" />
            <div>
              <p className="text-gray-800">MahmoudAlaa.w@gmail.com</p>
              <p className="text-sm text-gray-500">1 month ago</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
            + Add Email Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
