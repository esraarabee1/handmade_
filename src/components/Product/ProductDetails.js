import React from "react";
import ProductContent from "./ProductContent";
import ProductImageGallery from "./ProductImageGallery";

const ProductDetails = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  items-center p-4">
      <div className="flex justify-center  ">
        <ProductImageGallery />
      </div>

      <div className="flex justify-center">
        <ProductContent />
      </div>
    </div>
  );
};

export default ProductDetails;
