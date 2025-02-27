import React from "react";
import AllProductContainer from "../../components/Product/AllProductContainer";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
const ProductsPage = () => {
  return (
    <div>
      <NavBarLogin />
      <AllProductContainer />
      <Footer />
    </div>
  );
};

export default ProductsPage;
