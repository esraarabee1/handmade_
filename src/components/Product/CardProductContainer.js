import React from "react";
import SubTiltle from "../Uitily/SubTiltle";
import ProductCard from "./ProductCard";
import categorycloth from "../../images/categorycloth.png";
import accessory from "../../images/accessory.png";
import AllProductHook from "../../Hook/all-product-hook";
import AllfavproductHook from "../../Hook/allfavprod-hook";
import { useEffect, useState } from "react";
const CardProductsContainer = ({ title, btntitle, pathText }) => {
  const [products, loading] = AllProductHook();
  const [favproducts, , favProd] = AllfavproductHook();
  useEffect(() => {
    console.log("🛒 favproducts:", favproducts);
    console.log("🆔 favProd (IDs فقط):", favProd);
  }, [favproducts, favProd]);
  return (
    <div className="container mx-auto px-4">
      {/* العنوان الفرعي */}
      <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      {/* شبكة البطاقات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 ">
        {products.data ? (
          products.data.slice(0, 4).map((item) => {
            return (
              <ProductCard
                category={item.thumbImage}
                discount="10%"
                productName={item.name}
                currentPrice={item.price}
                originalPrice="$1000"
                savings={item.offerPrice}
                item={item.id}
                favProdIds={favProd}
                favProdUandProdId={favproducts}
              />
            );
          })
        ) : (
          <h4>no data</h4>
        )}
      </div>
    </div>
  );
};

export default CardProductsContainer;
