import React from "react";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
import UserProfile from "../../components/User/UserProfile";
import UserdataHook from "../../Hook/user-data-hook";
const UserProfilePage = () => {
  return (
    <div>
      <NavBarLogin />
      <UserProfile />
      <Footer />
    </div>
  );
};

export default UserProfilePage;
