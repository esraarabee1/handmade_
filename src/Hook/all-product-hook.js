import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProducts,
  getAllProductsSearch,
} from "../rudex/actions/productActions";

const AllProductHook = () => {
  const dispatch = useDispatch();

  let word = "";
  const getProduct = async () => {
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");
    await dispatch(getAllProductsSearch(`name=${word}`));
  };
  useEffect(() => {
    getProduct();
  }, []);

  const state = useSelector((state) => state);
  console.log("Redux State:", state); // ✅ تحقق من تحديث Redux

  const products = useSelector((state) => state.allProducts?.products);
  const loading = useSelector((state) => state.allProducts?.loading);

  console.log("products Data:", products.data); // ✅ تحقق من ظهور البيانات هنا

  return [products, loading, getProduct];
};

export default AllProductHook;
