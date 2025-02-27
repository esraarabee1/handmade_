import React from "react";
import SubTiltle from "../Uitily/SubTiltle";
import CategoryCard from "./../Category/CategoryCard";
import categorycloth from "../../images/categorycloth.png";
import AllCategoryHook from "../../Hook/all-category-hook";

const HomeCategory = () => {
  const [category, loading] = AllCategoryHook();

  return (
    <div className="container mx-auto px-4">
      <SubTiltle
        title="Shop From Top Categories"
        btntitle="View All"
        pathText="/allcategory"
      />
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading === false ? (
          category.data ? (
            category.data.slice(0, 4).map((item) => {
              return (
                <CategoryCard
                  categoryName={item.name}
                  categoryImage={item.icon}
                />
              );
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

export default HomeCategory;
