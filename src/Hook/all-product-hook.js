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
  console.log("Redux State:", state);

  const products = useSelector((state) => state.addprodReducer?.products);
  const loading = useSelector((state) => state.addprodReducer?.loading);

  console.log("products Data:", products.data);

  return [products, loading, getProduct];
};

export default AllProductHook;
