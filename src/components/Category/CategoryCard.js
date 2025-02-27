import React from "react";

const CategoryCard = ({ categoryName, categoryImage }) => {
  return (
    <div className="bg-white rounded-lg p-4 text-center  hover: transition-transform transform hover:scale-105 cursor-pointer">
      <img
        src={categoryImage}
        alt={categoryName}
        className="object-cover rounded-full w-40 h-40 mx-auto bg-gray-200"
        loading="lazy"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {categoryName}
      </h3>
    </div>
  );
};

export default CategoryCard;
