import React from "react";

const PrandCard = ({ imageSrc }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg ">
      <img src={imageSrc} className="object-cover w-full h-48" loading="lazy" />
    </div>
  );
};

export default PrandCard;
