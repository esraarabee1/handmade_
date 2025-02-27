import React from "react";
import EssentialContainer from "../../components/Essentials/EssentialContainer";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
const EssentialPage = () => {
  return (
    <div>
      <NavBarLogin />
      <EssentialContainer />
      <Footer />
    </div>
  );
};

export default EssentialPage;
