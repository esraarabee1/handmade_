import React from "react";
import AddvendorHook from "../../Hook/Admin/addvendor-hook";
import { useNavigate } from "react-router-dom";
const Adminaddvendor = () => {
  const navigate = useNavigate();

  const [
    name,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    userName,
    rolID,
    banner,
    description,
    onChangeName,
    onChangeLastName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    onChangeUserName,
    onChangeRoleId,
    OnSubmit,
    onChangeBanner,
    onChangeDescription,
  ] = AddvendorHook();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Add Vendor</h2>
          <button className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <form className="space-y-2 mt-2">
          <div>
            <label className="block text-xs font-medium text-gray-700">
              First Name
            </label>
            <input
              value={name}
              onChange={onChangeName}
              type="text"
              placeholder="First name"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={onChangeLastName}
              type="text"
              placeholder="Last name"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Email
            </label>
            <input
              value={email}
              onChange={onChangeEmail}
              type="email"
              placeholder="Email"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Password
            </label>
            <input
              value={password}
              onChange={onChangePassword}
              type="password"
              placeholder="Password"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              type="password"
              placeholder="Confirm Password"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Phone
            </label>
            <input
              value={phone}
              onChange={onChangePhone}
              type="tel"
              placeholder="Phone"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Username
            </label>
            <input
              value={userName}
              onChange={onChangeUserName}
              type="text"
              placeholder="Username"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Role ID
            </label>
            <input
              value={rolID}
              onChange={onChangeRoleId}
              type="text"
              placeholder="Role ID"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Banner
            </label>
            <input
              value={banner}
              onChange={onChangeBanner}
              type="text"
              placeholder="Role ID"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Description
            </label>
            <input
              value={description}
              onChange={onChangeDescription}
              type="text"
              placeholder="Role ID"
              className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
          <div className="flex justify-between mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log("Button Clicked!");
                navigate("/viewvendors");
              }}
              type="button"
              className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log(" Button Clicked!");
                OnSubmit();
              }}
              type="submit"
              className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminaddvendor;
