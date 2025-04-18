import React from "react";
import ProductCart from "./ProductCart";
import Breadcrumb from "../Uitily/Breadcrumb";
import GetAllUserCartHook from "../../Hook/cart/getallcart-hook";
import CreateOrderHook from "../../Hook/createorder-hook";

const CartItems = () => {
  const [cartItems] = GetAllUserCartHook();
  const [onSubmit, res] = CreateOrderHook();
  const totalPrice = cartItems
    ? cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    : 0;

  const shippingCost = 10.0;

  const totalAmount = totalPrice + shippingCost;
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  return (
    <div className="">
      <div className="mb-4">
        <Breadcrumb />
        <h3 className="text-2xl font-semibold mt-4">Your Cart</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 w-full md:w-3/4">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <ProductCart
                key={item.id}
                productId={item.id}
                category={item.thumbImage}
                productName={item.name}
                Price={item.price}
                quantity={item.qty}
              />
            ))
          ) : (
            <h4>no data</h4>
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/4">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Order Summary
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>

              <hr className="border-gray-300" />

              <div className="flex justify-between font-bold text-gray-800">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={onSubmit}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg text-center font-semibold hover:bg-blue-700 transition"
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
