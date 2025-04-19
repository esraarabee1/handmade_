import React from "react";
import CategoryCard from "./CategoryCard";
import categorycloth from "../../images/categorycloth.png";
import AllCategoryHook from "../../Hook/all-category-hook";

const CategoryContainer = () => {
  const [category, loading] = AllCategoryHook();

  return (
    <div className="container mx-auto p-4">
      <div className="text-lg font-bold mb-4">Shop From Top Categories </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.data ? (
          category.data.slice(0, 10).map((item) => {
            return (
              <CategoryCard
                categoryName={item.name}
                categoryImage={item.icon}
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

export default CategoryContainer;
