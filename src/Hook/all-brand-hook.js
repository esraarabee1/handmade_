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
  console.log("Redux State:", state);
  const brands = useSelector((state) => state.allBrands?.brands);
  const loading = useSelector((state) => state.allBrands?.loading);

  console.log("Brand Data:", brands.data);

  return [brands, loading];
};

export default AllBrandsHook;
