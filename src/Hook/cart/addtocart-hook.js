import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../rudex/actions/cartActions";
import useOneProduct from "../products/getoneprod-hook";

const AddToCartHook = () => {
  const { id } = useParams();
  const { productdetails } = useOneProduct(id);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const addToCartHandel = async () => {
    setLoading(true);
    await dispatch(
      addToCart({
        ProductId: id,
        Quantity: 1,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.addToCart);

  useEffect(() => {
    if (!loading && res?.data) {
      console.log("Added to cart:", res.data);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProduct = cart.find((item) => item.id === res.data.id);
      if (existingProduct) {
        existingProduct.qty += 1;
      } else {
        cart.push({
          id: res.data.id,
          name: res.data.name,
          price: res.data.price,
          qty: 1,
          thumbImage: res.data.thumbImage,
          brandId: res.data.brandId,
          categoryId: res.data.categoryId,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      // ✅ إضافة نسخة مختصرة id + qty فقط
      let shortCart = JSON.parse(localStorage.getItem("shortCart")) || [];

      const existingShort = shortCart.find((item) => item.id === res.data.id);
      if (existingShort) {
        existingShort.qty += 1;
      } else {
        shortCart.push({
          id: res.data.id,
          qty: 1,
        });
      }

      localStorage.setItem("shortCart", JSON.stringify(shortCart));
    }
  }, [loading, res]);

  return [addToCartHandel];
};

export default AddToCartHook;
