import React, { useEffect } from "react";
import CategoryContainer from "../../components/Category/CategoryContainer";
import NavBarLogin from "../../components/Uitily/NavBarLogin";
import Footer from "../../components/Uitily/Footer";
import baseURL from "../../API/baseURL";
import { getData } from "../../Hooks/useGetData";
import axios from "axios";
import AllCategoryHook from "../../Hook/all-category-hook";

const AllCategoryPage = () => {
  const [category, loading] = AllCategoryHook();

  return (
    <div>
      <NavBarLogin />
      <CategoryContainer />
      <Footer />
    </div>
  );
};

export default AllCategoryPage;
