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

      const storedCart = localStorage.getItem("cart");

      if (storedCart) {
        setCartItems(JSON.parse(storedCart)); // تحويل النص إلى  JSON
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

      localStorage.setItem("cart", JSON.stringify(res));
    }
  }, [loading]);

  return [cartItems];
};

export default GetAllUserCartHook;
