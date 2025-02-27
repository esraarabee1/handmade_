import React from "react";
import UserWhishlistContainer from "../../components/User/UserWhishlistContainer";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
const UserWhishlistPage = () => {
  return (
    <div>
      <NavBarLogin />
      <UserWhishlistContainer />
      <Footer />
    </div>
  );
};

export default UserWhishlistPage;
