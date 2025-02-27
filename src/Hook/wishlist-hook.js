import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addtoWishlist,
  removeFromWishlist,
} from "../rudex/actions/whislistactions/addAction";
import heartfav from "../images/heartfav.svg";
import heartfavon from "../images/heartfavon.svg";

const useWishlistHook = (item, favProd = []) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(heartfav);
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);
  const [userID, setUserID] = useState(null);

  // ✅ جلب `userID` من LocalStorage عند تحميل المكون
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUserID(parsedUser?.id); // تأكد أن المفتاح صحيح
    }
  }, []);

  // ✅ تأكد أن `favProd` هو مصفوفة قبل استخدام `some()`
  const Fav = Array.isArray(favProd) && favProd.some((fitem) => fitem === item);
  const [isFav, setIsFav] = useState(Fav);

  useEffect(() => {
    if (Array.isArray(favProd)) {
      setIsFav(favProd.some((fitem) => fitem === item));
    }
  }, [favProd, item]);

  const handelFav = () => {
    if (isFav) {
      removeToWishListData();
    } else {
      addToWishListData();
    }
  };

  useEffect(() => {
    setFavImg(isFav ? heartfavon : heartfav);
  }, [isFav]);

  const resAdd = useSelector((state) => state.addtowishReducer.addtowish);
  const resRemove = useSelector((state) => state.removewishReducer.removewish);

  const addToWishListData = async () => {
    if (!userID) {
      console.warn("⚠️ User ID not found!");
      return;
    }

    setIsFav(true);
    setFavImg(heartfavon);
    setLoadingAdd(true);

    await dispatch(
      addtoWishlist({
        ProductId: item,
        UserId: userID, // ✅ استخدم `userID` الحقيقي
      })
    );

    setLoadingAdd(false);
  };

  const removeToWishListData = async () => {
    if (!userID) {
      console.warn("⚠️ User ID not found!");
      return;
    }

    setIsFav(false);
    setFavImg(heartfav);
    setLoadingRemove(true);

    await dispatch(removeFromWishlist(userID, item));

    setLoadingRemove(false);
  };

  useEffect(() => {
    if (!loadingAdd) {
      console.log("✅ Wishlist Added:", resAdd);
    }
  }, [loadingAdd]);

  useEffect(() => {
    if (!loadingRemove) {
      console.log("✅ Wishlist Removed:", resRemove);
    }
  }, [loadingRemove]);

  return [removeToWishListData, addToWishListData, handelFav, favImg];
};

export default useWishlistHook;
