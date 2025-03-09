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

  // إضافة المنتج إلى السلة
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
      console.log("✅ Added to cart:", res.data);

      // 🔹 جلب البيانات الحالية من `localStorage`
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // 🔍 التحقق مما إذا كان المنتج موجودًا بالفعل
      const existingProduct = cart.find((item) => item.id === res.data.id);
      if (existingProduct) {
        existingProduct.qty += 1; // زيادة الكمية إذا كان المنتج موجودًا
      } else {
        cart.push({
          id: res.data.id,
          name: res.data.name,
          price: res.data.price,
          qty: 1, // الكمية الافتراضية
          thumbImage: res.data.thumbImage,
          brandId: res.data.brandId,
          categoryId: res.data.categoryId,
        });
      }

      // 💾 حفظ البيانات الجديدة في `localStorage`
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [loading, res]);

  return [addToCartHandel];
};

export default AddToCartHook;
