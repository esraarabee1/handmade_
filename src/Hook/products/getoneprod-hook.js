import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneProduct } from "../../rudex/actions/productActions";

const useOneProduct = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getOneProduct(id)); // ✅ إرسال `id` الصحيح
    } else {
      console.warn("⚠️ id غير موجود!");
    }
  }, [dispatch, id]); // ✅ التصحيح هنا

  // جلب بيانات المنتج من Redux
  const productdetails = useSelector(
    (state) => state.productdetailsReducer?.product
  );

  console.log("📌 بيانات المنتج:", productdetails);

  return { productdetails }; // ✅ استخدام كائن بدل مصفوفة
};

export default useOneProduct;
