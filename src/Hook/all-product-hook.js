import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../rudex/actions/productActions";

const AllProductHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching products...");
    dispatch(getAllProducts());
  }, [dispatch]);

  const state = useSelector((state) => state);
  console.log("Redux State:", state); // ✅ تحقق من تحديث Redux

  const products = useSelector((state) => state.allProducts?.products);
  const loading = useSelector((state) => state.allProducts?.loading);

  console.log("products Data:", products.data); // ✅ تحقق من ظهور البيانات هنا

  return [products, loading];
};

export default AllProductHook;
