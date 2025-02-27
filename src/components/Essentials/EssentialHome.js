import React from "react";
import SubTiltle from "../Uitily/SubTiltle";
import Categorycloth from "../../images/categorycloth.png";
import Categoryfurni from "../../images/categoryfurniture.png";
import Categorytable from "../../images/categorytable.png";
import category from "../../images/category.png";
import EssentialCard from "./EssentialCard";
const EssentialHome = ({ title, btntitle, pathText }) => {
  return (
    <div className="container mx-auto px-4">
      <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <EssentialCard
          essentialImage={category}
          essentialName="Jewelry & Accessories"
        />
        <EssentialCard
          essentialImage={Categorycloth}
          essentialName="Clothing"
        />
        <EssentialCard
          essentialImage={Categoryfurni}
          essentialName="Furniture"
        />
        <EssentialCard essentialImage={Categorytable} essentialName="Tables" />
      </div>
    </div>
  );
};

export default EssentialHome;
