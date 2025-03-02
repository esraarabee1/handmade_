import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../rudex/actions/cartActions";
import { getOneProduct } from "../../rudex/actions/productActions";
import useOneProduct from "../products/getoneprod-hook";

const AddToCartHook = (cartId) => {
  const { id } = useParams();
  const { productdetails } = useOneProduct(id);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  //add product to cart
  const addToCartHandel = async () => {
    setLoading(true);
    await dispatch(
      addToCart({
        CartId: 1,
        Price: productdetails.price,
        ProductId: 23,
        Quantity: 1,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.addToCart);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log("add to cart", res);
      }
    }
  }, [loading]);

  return [addToCartHandel];
};

export default AddToCartHook;
