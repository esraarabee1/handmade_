import React from "react";
import ProductCart from "./ProductCart";
import Breadcrumb from "../Uitily/Breadcrumb";
import GetAllUserCartHook from "../../Hook/cart/getallcart-hook";
import cartprodone from "../../images/cartprodone.png";
const CartItems = () => {
  const [cartItems] = GetAllUserCartHook();
  return (
    <div className="">
      {/* Breadcrumb and Title */}
      <div className="mb-4">
        <Breadcrumb />
        <h3 className="text-2xl font-semibold mt-4">Your Cart</h3>
      </div>

      {/* Cart Products List */}
      <div className="flex flex-col gap-4">
        {cartItems ? (
          cartItems.map((item) => {
            return (
              <ProductCart
                category={cartprodone}
                productName="Peace lily"
                Price={item.price}
                subTotal={item.subTotal}
                cartId={item.cartId}
                quantity={item.quantity}
              />
            );
          })
        ) : (
          <h4>no data</h4>
        )}
      </div>
    </div>
  );
};

export default CartItems;
