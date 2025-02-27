import React from "react";
import register from "../../images/register.png";
import LoginHook from "../../Hook/Auth/login-hook";

const LoginPage = () => {
  const [
    userName,
    password,
    loading,
    onChangeUserName,
    onChangePassword,
    onSubmit,
    isPress,
  ] = LoginHook();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full h-64 md:h-auto">
        <img
          src={register}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-6 md:p-10">
        <div className="w-full max-w-md">
          <h4 className="text-2xl font-semibold text-blue-600 mb-2">
            Welcome{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h4>
          <span className="text-gray-500 mb-6 block">Please login here</span>

          <form className="space-y-4">
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

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-700">
                  Remember Me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
