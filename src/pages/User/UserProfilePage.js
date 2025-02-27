import React from "react";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
import UserProfile from "../../components/User/UserProfile";
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
