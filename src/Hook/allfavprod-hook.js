import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllFav } from "../rudex/actions/whislistactions/addAction";

const AllfavproductHook = () => {
  const dispatch = useDispatch();
  const [favProd, setFavProd] = useState([]);
  const [userID, setUserID] = useState(null);

  // ✅ جلب `userID` من LocalStorage عند تحميل المكون
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUserID(parsedUser?.id); // تأكد من أن المفتاح صحيح
    }
  }, []);

  useEffect(() => {
    if (userID) {
      console.log("🚀 Fetching fav products for user:", userID);
      dispatch(getAllFav(userID)); // ✅ إرسال `userID` الصحيح
    } else {
      console.warn("⚠️ User ID not found!");
    }
  }, [dispatch, userID]);

  // ✅ استرجاع البيانات من Redux
  const favproducts =
    useSelector((state) => state.getfavReducer?.favprods) || [];
  const loading = useSelector((state) => state.getfavReducer?.loading);

  console.log("📌 favProducts Data:", favproducts);

  // ✅ تحديث `favProd` عند تغيير `favproducts`
  useEffect(() => {
    if (Array.isArray(favproducts) && favproducts.length > 0) {
      const extractedProducts = favproducts.map((item) => item.productId);
      setFavProd(extractedProducts);
      console.log("✅ favProd updated:", extractedProducts);
    } else {
      setFavProd([]);
    }
  }, [favproducts]);

  return [favproducts, , favProd]; // ✅ الحل الصحيح
};

export default AllfavproductHook;
