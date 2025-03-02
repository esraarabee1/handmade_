import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserCart } from "../../rudex/actions/cartActions";
import { getOneProduct } from "../../rudex/actions/productActions";

const GetAllUserCartHook = () => {
  const dispatch = useDispatch();
  const { productdetails } = getOneProduct();
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getUserCart());
      setLoading(false);
    };
    get();
  }, []);
  const res = useSelector((state) => state.getcartReducer.userCart);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log("get cart", res);

        setCartItems(res);
      }
    }
  }, [loading]);

  return [cartItems];
};

export default GetAllUserCartHook;
