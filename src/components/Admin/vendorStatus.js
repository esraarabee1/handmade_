import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AddvendorHook from "../../Hook/Admin/addvendor-hook";
const VendorStatus = () => {
  const [addModal, setAddModal] = useState(false);
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
    <div className="rounded-lg ">
      {/* العنوان */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Trader Summary</h2>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Button Clicked!");
            setAddModal(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add a New Trader
        </button>
        {addModal ? (
          <>
            <div className="flex items-center justify-center fixed inset-0 z-50 bg-gray-500 bg-opacity-50 overflow-y-auto">
              <div className="w-11/12 max-w-lg border bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
                <div className="flex flex-row justify-between p-5  rounded-t-lg">
                  <h3 className="text-black text-center font-medium text-[20px] leading-normal ">
                    Add a New Trader
                  </h3>
                  <button
                    className="text-black text-3xl leading-none block"
                    onClick={() => setAddModal(false)}
                  >
                    &times;
                  </button>
                </div>
                <form className="space-y-2 mt-2 px-4 pb-4">
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
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(" Button Clicked!");
                        OnSubmit();
                      }}
                      type="submit"
                      className="flex w-[180px] text-white px-4 py-[10px] justify-center items-center gap-[10px] rounded-[12px] bg-[#008ECC]"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : null}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
        <div className="bg-gray-100 p-3 rounded-full">
          <FaUsers className="text-gray-700 text-xl" />
        </div>

        {/* التفاصيل */}
        <div className="flex-1 flex justify-between">
          <div>
            <p className="text-sm text-gray-500">All Traders</p>
            <h3 className="text-xl font-bold">
              1,250 <span className="text-green-600 text-sm">+15.80%</span>
            </h3>
          </div>
          <div>
            <p className="text-sm text-gray-500">Active</p>
            <h3 className="text-xl font-bold">
              1,180 <span className="text-green-600 text-sm">+85%</span>
            </h3>
          </div>
          <div>
            <p className="text-sm text-gray-500">In-Active</p>
            <h3 className="text-xl font-bold">
              70 <span className="text-red-600 text-sm">-10%</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorStatus;
