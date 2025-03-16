import React from "react";
import CartItems from "../../components/Cart/CartItems";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
const CartPage = () => {
  return (
    <div>
      <NavBarLogin />
      <div className="container mx-auto flex flex-col md:flex-row gap-6 justify-center  mt-6 ">
        <div className="w-full ">
          <CartItems />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
