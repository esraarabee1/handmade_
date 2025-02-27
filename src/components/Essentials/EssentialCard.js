import React from "react";

const EssentialCard = ({ essentialName, essentialImage }) => {
  return (
    <div className="bg-white rounded-lg  p-4 text-center">
      <img
        src={essentialImage}
        alt={essentialName}
        className="object-cover rounded-lg w-40 h-40 mx-auto bg-gray-200"
        loading="lazy"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {essentialName}
      </h3>
    </div>
  );
};

export default EssentialCard;
