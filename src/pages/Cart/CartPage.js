import React from "react";
import CartItems from "../../components/Cart/CartItems";
import CartCheckout from "../../components/Cart/CartCheckout";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
const CartPage = () => {
  return (
    <div>
      <NavBarLogin />
      <div className="container mx-auto flex flex-col md:flex-row gap-6 justify-center  mt-6 ">
        {/* Cart Items Section */}
        <div className="w-full md:flex-1">
          <CartItems />
        </div>

        {/* Cart Checkout Section */}
        <div className="w-full md:w-1/3">
          <CartCheckout />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
