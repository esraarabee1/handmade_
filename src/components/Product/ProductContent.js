import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Uitily/Breadcrumb";
import Frameone from "../../images/Frameone.png";
import Frametwo from "../../images/Frametwo.png";
import AddToCartHook from "../../Hook/cart/addtocart-hook";
import useOneProduct from "../../Hook/products/getoneprod-hook";

const ProductContent = () => {
  const { id } = useParams();
  const { productdetails } = useOneProduct(id);

  if (!productdetails) return <p>🚀 جاري التحميل...</p>;

  const [addToCartHandel] = AddToCartHook();

  return (
    <div className="  ">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Product Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {productdetails.name}
        </h3>
        <div className="flex gap-4">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                d="M11.84 2.45c.7.08 1.21.68 1.21 1.39v9.84l-4.77-2.38-4.77 2.38V3.84c0-.7.51-1.3 1.21-1.39 2.36-.28 4.74-.28 7.12 0z"
                stroke="#3A4980"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                d="M5.08 7.27c-.15-.28-.39-.5-.69-.63a1.05 1.05 0 00-.94.1c-.3.2-.48.5-.48.83 0 .33.18.63.48.83.3.2.64.25.94.1.3-.14.54-.36.69-.63m0 0c.11.21.17.45.17.7 0 .25-.06.5-.17.7m0-1.4l6.08-3.38m-6.08 3.38l6.08 3.38m0-6.76c.1.17.23.31.38.42.16.11.33.2.51.25.18.05.37.08.56.06.18-.02.36-.09.53-.18.17-.1.32-.24.44-.4.12-.16.2-.34.25-.54a1.05 1.05 0 00-.17-.88c-.1-.17-.24-.32-.4-.44-.17-.12-.35-.2-.55-.24a1.05 1.05 0 00-.62.1c-.27.1-.5.34-.64.65-.14.3-.16.66.05.96zM11.16 12.03c-.1.17-.16.35-.19.54a1.05 1.05 0 00.12.93c.12.18.3.32.5.41.2.1.42.15.64.15.21 0 .42-.05.63-.15.2-.1.38-.23.5-.41a1.05 1.05 0 00.13-.93c-.03-.19-.1-.38-.19-.54-.1-.17-.23-.31-.39-.42a1.05 1.05 0 00-.55-.25c-.18-.05-.37-.07-.56-.06-.19.02-.37.09-.53.18-.17.1-.32.24-.44.4-.12.16-.2.34-.25.54a1.05 1.05 0 00-.17.88z"
                stroke="#3A4980"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="mb-6">
        <span className="block text-sm text-gray-500">
          {productdetails.seoTitle}
        </span>
        <hr className="my-2 border-gray-300" />
      </div>

      {/* Pricing and Reviews */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            ${productdetails.price}
          </h2>
          <span className="text-sm text-gray-400">$71.56</span>
        </div>
        <div>
          <div className="flex items-center gap-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              fill="none"
            >
              <path
                d="M6.72 2.52c.02-.05.05-.1.1-.13a.31.31 0 01.14-.05c.05 0 .1.02.14.05.04.03.08.08.1.13l1.08 2.6c.02.05.05.1.1.13.05.03.1.05.14.06l2.8.23c.26.02.36.34.15.52L9.4 7.85c-.04.04-.07.08-.09.13a.31.31 0 00-.01.16l.65 2.74a.31.31 0 01-.13.35.31.31 0 01-.17.04.31.31 0 01-.18-.04l-2.4-1.47a.31.31 0 00-.33 0L4.43 11.18a.31.31 0 01-.35-.04.31.31 0 01-.14-.35l.65-2.73a.31.31 0 00-.01-.15.31.31 0 00-.09-.13L2.43 6.02a.31.31 0 01-.11-.36c.02-.09.06-.16.12-.22.06-.06.13-.1.2-.12l2.8-.23c.05-.01.1-.03.14-.06.05-.03.08-.08.1-.13l1.08-2.6z"
                stroke="#D48D3B"
                strokeWidth="1.14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>4.8</span>
          </div>
          <span className="text-sm text-gray-500">
            93% of buyers recommend this
          </span>
        </div>
      </div>

      {/* Product Description */}
      <div className="mb-6">
        <p className="text-gray-600 leading-relaxed">
          {productdetails.longDescription}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={addToCartHandel}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M10.7606 7.49197V4.48976C10.7606 3.82623 10.497 3.18988 10.0278 2.72069C9.55863 2.2515 8.92228 1.98792 8.25875 1.98792C7.59522 1.98792 6.95887 2.2515 6.48968 2.72069C6.02049 3.18988 5.75691 3.82623 5.75691 4.48976V7.49197M13.3332 6.16233L14.1758 14.1682C14.2225 14.6119 13.8756 14.9975 13.4292 14.9975H3.08827C2.983 14.9976 2.87888 14.9756 2.78268 14.9328C2.68648 14.8901 2.60034 14.8276 2.52988 14.7494C2.45941 14.6712 2.40618 14.579 2.37365 14.4789C2.34112 14.3788 2.33001 14.2729 2.34105 14.1682L3.18434 6.16233C3.20379 5.9779 3.29084 5.8072 3.42869 5.68314C3.56654 5.55909 3.74544 5.49046 3.93089 5.4905H12.5866C12.9709 5.4905 13.2931 5.78071 13.3332 6.16233ZM6.00709 7.49197C6.00709 7.55833 5.98073 7.62196 5.93381 7.66888C5.88689 7.7158 5.82326 7.74216 5.75691 7.74216C5.69055 7.74216 5.62692 7.7158 5.58 7.66888C5.53308 7.62196 5.50672 7.55833 5.50672 7.49197C5.50672 7.42562 5.53308 7.36198 5.58 7.31507C5.62692 7.26815 5.69055 7.24179 5.75691 7.24179C5.82326 7.24179 5.88689 7.26815 5.93381 7.31507C5.98073 7.36198 6.00709 7.42562 6.00709 7.49197ZM11.0108 7.49197C11.0108 7.55833 10.9844 7.62196 10.9375 7.66888C10.8906 7.7158 10.8269 7.74216 10.7606 7.74216C10.6942 7.74216 10.6306 7.7158 10.5837 7.66888C10.5368 7.62196 10.5104 7.55833 10.5104 7.49197C10.5104 7.42562 10.5368 7.36198 10.5837 7.31507C10.6306 7.26815 10.6942 7.24179 10.7606 7.24179C10.8269 7.24179 10.8906 7.26815 10.9375 7.31507C10.9844 7.36198 11.0108 7.42562 11.0108 7.49197Z"
              stroke="white"
              stroke-width="1.1437"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Add to Cart
        </button>
      </div>

      {/* Delivery and Returns */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <img src={Frameone} alt="Free Delivery" />
          <div>
            <h3 className="font-medium text-gray-900">Free Delivery</h3>
            <span className="text-sm text-gray-500">Return Delivery</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={Frametwo} alt="Return Delivery" />
          <div>
            <h3 className="font-medium text-gray-900">Return Delivery</h3>
            <span className="text-sm text-gray-500">
              Free 30 days Delivery Return. Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
