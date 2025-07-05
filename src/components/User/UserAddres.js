import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const UserAddress = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [address, setAddress] = useState();

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="space-y-4 p-4 w-3/4 md:w-1/2 lg:w-1/2">
        <h3 className="text-lg font-bold">Enter Your Address</h3>
        <div>
          <label className="block mb-1">Street, Country</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="e.g. 123 Nile St."
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          onClick={() => {
            localStorage.setItem("userAddress", address);
            navigate("/checkout");
          }}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default UserAddress;
