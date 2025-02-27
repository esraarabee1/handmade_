import React, { useState } from "react";
import heartfav from "../../images/heartfav.svg";
import heartfavon from "../../images/heartfavon.svg";
import { Link } from "react-router-dom";
import useWishlistHook from "../../Hook/wishlist-hook";

const Card = ({
  category,
  discount,
  productName,
  currentPrice,
  originalPrice,
  savings,
  item,
  favProdIds,
  favProdUandProdId,
  className,
}) => {
  const [removeToWishListData, addToWishListData, handelFav, favImg] =
    useWishlistHook(item, favProdIds || []);
  return (
    <div
      className={` flex flex-col gap-6 w-[278px] h-[350px] bg-[#F5F5F5] rounded-[16px] border border-transparent shadow-[0px_10px_1px_rgba(183,183,183,0.10),0px_97px_39px_rgba(0,0,0,0.01),0px_54px_33px_rgba(0,0,0,0.03),0px_24px_24px_rgba(0,0,0,0.04),0px_6px_13px_rgba(0,0,0,0.05),0px_0px_0px_rgba(0,0,0,0.05)] relative ${className}`}
    >
      <div>
        {/* Header */}
        <div className="flex justify-between mb-4 absolute top-0 left-2 right-0">
          <div className="pt-4 pl-2">
            <img
              src={favImg}
              alt=""
              onClick={handelFav}
              style={{
                height: "24px",
                width: "26px",
                cursor: "pointer",
              }}
            />
          </div>
          <span className="px-2 py-2 text-sm font-bold text-white bg-blue-600 rounded-bl-lg rounded-tr-lg shadow-md">
            {discount} <br /> OFF
          </span>
        </div>

        {/* Image */}
        <Link to={`/products/${item}`} style={{ textDecoration: "none" }}>
          <div className="relative mb-4 mt-8 flex justify-center">
            <img
              src={category}
              alt="Product"
              className="w-[105px] h-[157px] object-cover rounded-lg bg-gray-100"
              loading="lazy"
            />
          </div>
        </Link>
      </div>
      {/* Content */}
      <div className="w-[275.551px] h-[120px] rounded-b-[15px] bg-white pl-4 pr-4 flex flex-col justify-center">
        <div className="flex flex-col pb-2 gap-2">
          <h3 className="text-lg font-semibold text-gray-800">{productName}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-800">
              ${currentPrice}
            </span>
            <span className="text-sm line-through text-gray-500">
              ${originalPrice}
            </span>
          </div>
        </div>
        <div>
          <hr></hr>
        </div>
        <p className="text-sm text-green-600 mt-2">Save - ${savings}</p>
      </div>
    </div>
  );
};

export default Card;
