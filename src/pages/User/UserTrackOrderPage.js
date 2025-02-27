import React from "react";
import OrderDetailsContainer from "../../components/User/OrderDetailsContainer";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
const UserTrackOrderPage = () => {
  return (
    <div>
      <NavBarLogin />
      <OrderDetailsContainer />
      <Footer />
    </div>
  );
};

export default UserTrackOrderPage;
