import React from "react";
import { FaUsers } from "react-icons/fa"; // أيقونة المستخدمين
import { useNavigate } from "react-router-dom";
const OrderStatus = () => {
  const navigate = useNavigate();
  return (
    <div className="rounded-lg ">
      {/* العنوان */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Orders Summary</h2>
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
            <p className="text-sm text-gray-500">All Orders</p>
            <h3 className="text-xl font-bold">
              250 <span className="text-green-600 text-sm">+15.80%</span>
            </h3>
          </div>
          <div>
            <p className="text-sm text-gray-500">Pending</p>
            <h3 className="text-xl font-bold">
              180 <span className="text-green-600 text-sm">+85%</span>
            </h3>
          </div>
          <div>
            <p className="text-sm text-gray-500">Completed</p>
            <h3 className="text-xl font-bold">
              70 <span className="text-red-600 text-sm">-10%</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
