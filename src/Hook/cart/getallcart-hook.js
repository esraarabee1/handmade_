import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserCart } from "../../rudex/actions/cartActions";

const GetAllUserCartHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);

      // محاولة جلب الكارت من localStorage
      const storedCart = localStorage.getItem("cart");

      if (storedCart) {
        setCartItems(JSON.parse(storedCart)); // تحويل النص إلى كائن JSON
        setLoading(false);
      } else {
        await dispatch(getUserCart());
        setLoading(false);
      }
    };

    get();
  }, []);

  const res = useSelector((state) => state.getcartReducer.userCart);

  useEffect(() => {
    if (!loading && res) {
      console.log("get cart", res);
      setCartItems(res);

      // حفظ الكارت في localStorage بعد استرجاعه من API
      localStorage.setItem("cart", JSON.stringify(res));
    }
  }, [loading]);

  return [cartItems];
};

export default GetAllUserCartHook;
