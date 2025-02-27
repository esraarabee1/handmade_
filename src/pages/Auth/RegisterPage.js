import React from "react";
import login from "../../images/login.png";
import RegisterHook from "../../Hook/Auth/signup-hook";

const RegisterPage = () => {
  const [
    name,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    userName,
    rolID,
    loading,
    onChangeName,
    onChangeLastName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    onChangeUserName,
    onChangeRoleId,
    OnSubmit,
  ] = RegisterHook();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img
          src={login}
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-6 md:p-10">
        <div className="w-full max-w-md">
          <h4 className="text-2xl font-semibold text-blue-600 mb-2">
            Create New Account
          </h4>
          <span className="text-gray-500 mb-6 block">Please enter details</span>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                value={name}
                onChange={onChangeName}
                type="text"
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={onChangeLastName}
                type="text"
                placeholder="Enter your last name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                value={email}
                onChange={onChangeEmail}
                type="email"
                placeholder="Enter Email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder="Enter Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                type="password"
                placeholder="Re-enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                value={phone}
                onChange={onChangePhone}
                type="tel"
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                value={userName}
                onChange={onChangeUserName}
                type="text"
                placeholder="Enter your username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role ID
              </label>
              <input
                value={rolID}
                onChange={onChangeRoleId}
                type="text"
                placeholder="Enter your role ID"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                console.log("🖱️ Button Clicked!");
                OnSubmit();
              }}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
