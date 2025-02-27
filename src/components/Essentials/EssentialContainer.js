import React from "react";
import Categorycloth from "../../images/categorycloth.png";
import Categoryfurni from "../../images/categoryfurniture.png";
import Categorytable from "../../images/categorytable.png";
import category from "../../images/category.png";
import EssentialCard from "./EssentialCard";
const EssentialContainer = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-lg font-bold mb-4">Daily Essentials </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

export default EssentialContainer;
