import React from "react";
import Slider from "../../components/Home/Silder";
import HomeCategory from "../../components/Home/HomeCategory";
import CardProductsContainer from "../../components/Product/CardProductContainer";
import PrandHome from "../../components/Prands/PrandHome";
import EssentialHome from "../../components/Essentials/EssentialHome";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
const HomePage = () => {
  return (
    <div>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title="Grab the best deal on Jewelry & Accessories"
        btntitle="View All"
        pathText="/products"
      />
      <PrandHome title="Top Brands" btntitle="View All" pathText="/allprands" />
      <EssentialHome
        title="Daily Essentials"
        btntitle="View All"
        pathText="/allessential"
      />
      <Footer />
    </div>
  );
};

export default HomePage;
