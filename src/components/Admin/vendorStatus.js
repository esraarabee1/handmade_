import React from "react";
import { FaUsers } from "react-icons/fa"; // أيقونة المستخدمين
import { useNavigate } from "react-router-dom";
const VendorStatus = () => {
  const navigate = useNavigate();
  return (
    <div className="rounded-lg ">
      {/* العنوان */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Trader Summary</h2>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Button Clicked!");
            navigate("/addvendors");
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add a New Trader
        </button>
      </div>

      {/* صندوق البيانات */}
      <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
        {/* أيقونة */}
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
