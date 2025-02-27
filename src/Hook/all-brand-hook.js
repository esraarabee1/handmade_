import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBrands } from "../rudex/actions/brandActions";

const AllBrandsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching products...");
    dispatch(getAllBrands());
  }, [dispatch]);

  const state = useSelector((state) => state);
  console.log("Redux State:", state); // ✅ تحقق من تحديث Redux

  const brands = useSelector((state) => state.allBrands?.brands);
  const loading = useSelector((state) => state.allBrands?.loading);

  console.log("Brand Data:", brands.data); // ✅ تحقق من ظهور البيانات هنا

  return [brands, loading];
};

export default AllBrandsHook;
