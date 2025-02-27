import React from "react";
import categorycloth from "../../images/categorycloth.png";
import ProductCard from "./ProductCard";
import accessory from "../../images/accessory.png";
import AllProductHook from "../../Hook/all-product-hook";

import useWishlistHook from "../../Hook/all-user-hook";
import AllfavproductHook from "../../Hook/allfavprod-hook";
const AllProductContainer = () => {
  const [products, loading] = AllProductHook();
  const [favproducts, , favProd] = AllfavproductHook();
  return (
    <div className="container mx-auto p-4">
      <div className="text-lg font-bold mb-4">
        Grab the best deal on Jewelry & Accessories
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.data ? (
          products.data.map((item) => {
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

export default AllProductContainer;
