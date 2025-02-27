import React from "react";
import PrandsContainer from "../../components/Prands/PrandsContainer";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
const PrandPage = () => {
  return (
    <div>
      <NavBarLogin />
      <PrandsContainer />
      <Footer />
    </div>
  );
};

export default PrandPage;
