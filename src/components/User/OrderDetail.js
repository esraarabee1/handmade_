import React from "react";

const OrderDetail = () => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg mt-4">
      {/* Order Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Category</h4>
          <span className="font-semibold">Fragile Item</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Total Weight</h4>
          <span className="font-semibold">2 kg</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Qty.</h4>
          <span className="font-semibold">3</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Ordered Date</h4>
          <span className="font-semibold">10/02/23</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Ordered Time</h4>
          <span className="font-semibold">08:02 PM</span>
        </div>
      </div>

      <hr className="border-gray-300 mb-6" />

      {/* Pickup and Drop Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Type</h4>
          <span className="font-semibold">Intercity</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Pickup Location</h4>
          <span className="font-semibold">Ahmedabad</span>
          <p className="text-gray-500 text-sm">
            Iskon temple godown, behind Iskon temple, Ahmedabad, 382424
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Dropping Location</h4>
          <span className="font-semibold">Baroda</span>
          <p className="text-gray-500 text-sm">
            Iskon temple godown, behind Iskon temple, Ahmedabad, 382424
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
