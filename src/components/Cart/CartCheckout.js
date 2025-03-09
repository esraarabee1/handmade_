import React from "react";

const CartCheckout = () => {
  return (
    <div className="pt-20">
      <div className="p-4 bg-white rounded-lg shadow-lg  max-w-md ">
        {/* Order Summary Title */}
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Order Summary
        </h2>

        {/* Order Details */}
        <div className="space-y-3">
          {/* Subtotal */}
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>$145.00</span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>$10.00</span>
          </div>

          {/* Discount */}
          <div className="flex justify-between text-gray-600">
            <span>Discount</span>
            <span>-$5.00</span>
          </div>

          {/* Divider */}
          <hr className="border-gray-300" />

          {/* Total */}
          <div className="flex justify-between font-bold text-gray-800">
            <span>Total</span>
            <span>$150.00</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-blue-700 transition">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;
