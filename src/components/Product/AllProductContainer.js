import React from "react";
import ProductCard from "./ProductCard";
import AllProductHook from "../../Hook/all-product-hook";
import AllfavproductHook from "../../Hook/allfavprod-hook";

const AllProductContainer = () => {
  const [products, loading] = AllProductHook();
  const [favproducts, , favProd] = AllfavproductHook();

  return (
    <div className="container mx-auto p-4">
      <div className="text-lg font-bold mb-4">
        Grab the best deal on Jewelry & Accessories
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-2">
        {products.data ? (
          products.data
            .slice(0, 10)
            .map((item) => (
              <ProductCard
                key={item.id}
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
            ))
        ) : (
          <h4>No data</h4>
        )}
      </div>
    </div>
  );
};

export default AllProductContainer;
