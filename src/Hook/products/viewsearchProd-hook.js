import React, { useState, useEffect } from "react";

import AllProductHook from "../all-product-hook";

const NavbarSearchHook = () => {
  const [products, loading, getProduct] = AllProductHook();
  const [searchWord, setSearchWord] = useState("");

  const OnChange = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path != "/products") {
      window.location.href = "/products";
    }
  };
  useEffect(() => {
    getProduct();
  }, [searchWord]);
  return [OnChange, searchWord];
};

export default NavbarSearchHook;
