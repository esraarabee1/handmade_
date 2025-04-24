import React from "react";
import Group1 from "../../images/Group1.png";
import PrandCard from "./PrandCard";
import AllBrandsHook from "../../Hook/all-brand-hook";
const PrandsContainer = () => {
  const [brands, loading] = AllBrandsHook();
  return (
    <div className="container mx-auto p-4">
      <div className="text-lg font-bold mb-4">Top Brands </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading === false ? (
          brands.data ? (
            brands.data.slice(0, 4).map((item) => {
              return <PrandCard imageSrc={item.logo} />;
            })
          ) : (
            <h4>no data</h4>
          )
        ) : (
          <h4>looding</h4>
        )}
      </div>
    </div>
  );
};

export default PrandsContainer;
