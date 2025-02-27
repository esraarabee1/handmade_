import React from "react";
import ProductDetails from "../../components/Product/ProductDetails";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
const ProductDetailsPage = () => {
  return (
    <div>
      <NavBarLogin />
      <ProductDetails />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
