import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../rudex/actions/categoryAction";

const AllCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching categories...");
    dispatch(getAllCategory());
  }, [dispatch]);

  const state = useSelector((state) => state);
  console.log("Redux State:", state);

  const category = useSelector((state) => state.allCategory?.category);
  const loading = useSelector((state) => state.allCategory?.loading);

  console.log("Category Data:", category.data);

  return [category, loading];
};

export default AllCategoryHook;
