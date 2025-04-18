import React from "react";
import { Mail } from "lucide-react";
import UserdataHook from "../../Hook/user-data-hook";

const UserProfile = () => {
  const [userdata, loading] = UserdataHook();
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
              <h2 className="text-xl font-semibold">
                {userdata ? userdata.userName : "no data"}
              </h2>
              <p className="text-gray-500">
                {userdata ? userdata.email : "no data"}
              </p>
            </div>
          </div>

          <button className=" bg-blue-500 text-white px-4 py-2 rounded-lg hidden">
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <p className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm  focus:ring-blue-500 focus:border-blue-500">
              {userdata ? userdata.fName : "no data"}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <p className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm  focus:ring-blue-500 focus:border-blue-500">
              {userdata ? userdata.lName : "no data"}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <p className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm  focus:ring-blue-500 focus:border-blue-500">
              {userdata ? userdata.phone : "no data"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
