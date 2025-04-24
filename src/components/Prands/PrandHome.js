import React from "react";
import PrandCard from "./PrandCard";
import SubTiltle from "../Uitily/SubTiltle";
import Group1 from "../../images/Group1.png";
import AllBrandsHook from "../../Hook/all-brand-hook";
const PrandHome = ({ title, btntitle, pathText }) => {
  const [brands, loading] = AllBrandsHook();
  return (
    <div className="container mx-auto px-4">
      <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      <div className="my-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

export default PrandHome;
