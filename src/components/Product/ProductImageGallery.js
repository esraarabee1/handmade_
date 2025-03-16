import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useState } from "react";
import useOneProduct from "../../Hook/products/getoneprod-hook";
import { useParams } from "react-router-dom";

const ProductImageGallery = () => {
  const { id } = useParams();
  const { productdetails } = useOneProduct(id);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col items-center gap-3 p-3 max-w-md mx-auto rounded-lg">
      {/* Main Image Slider */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full"
      >
        {[...Array(3)].map((_, index) => (
          <SwiperSlide key={index}>
            <img
              src={productdetails?.thumbImage}
              alt={`Main Image ${index + 1}`}
              className="h-[450px] w-full object-cover rounded-md shadow"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        modules={[Thumbs]}
        slidesPerView={4}
        spaceBetween={8}
        onSwiper={setThumbsSwiper}
        className="w-full"
      >
        {[...Array(4)].map((_, index) => (
          <SwiperSlide key={index}>
            <img
              src={productdetails?.thumbImage}
              alt={`Thumbnail ${index + 1}`}
              className="h-20 w-full object-cover rounded-md border border-gray-300 hover:border-blue-500 transition-all duration-200 cursor-pointer" // ❌ لم يتم تغيير الطول
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageGallery;
