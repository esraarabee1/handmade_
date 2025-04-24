import React from "react";
import categorycloth from "../../images/categorycloth.png";
import ProductCard from "../Product/ProductCard";
import AllfavproductHook from "../../Hook/allfavprod-hook";
const UserWhishlistContainer = () => {
  const [favproducts, , favProd] = AllfavproductHook();

  return (
    <div className="flex flex-col container mx-auto">
      <h2 className="text-primary font-clash text-2xl font-semibold leading-[42px] text-center p-4 ">
        Wishlist
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {favproducts ? (
          favproducts.map((item) => {
            return (
              <ProductCard
                category={item.thumbImage}
                discount="10%"
                productName={item.name}
                currentPrice={item.price}
                originalPrice="$1000"
                savings={item.offerPrice}
                item={item.productId}
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

export default UserWhishlistContainer;
