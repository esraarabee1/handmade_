import React from "react";
import prod from "../../images/prod.png";
import AddProdHook from "../../Hook/Admin/addprod-hook";
const UploadProd = () => {
  const [
    img,
    name,
    slug,
    sellprice,
    qty,
    vendor,
    loading,
    isPress,
    shortdesc,
    longdesc,
    handelSubmit,
    onImageChange,
    onChangeName,
    onChangeSlug,
    onChangeSellprice,
    onChangeQty,
    onChangeVendor,
    onChangeShortdesc,
    onChangeLongdesc,
  ] = AddProdHook();
  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full">
      {/* تحميل الصورة */}
      <div className="mb-4 flex flex-col justify-center items-center ">
        <label htmlFor="upload-photo" className="cursor-pointer">
          <img
            src={img}
            alt="product"
            className="w-22 h-16 object-cover border rounded-md"
          />
        </label>
        <h3 className="block mb-2 text-gray-700">Upload Image </h3>
        <input
          type="file"
          id="upload-photo"
          className="hidden"
          name="photo"
          onChange={onImageChange}
        />
      </div>

      {/* زر الحفظ */}
      <div className="flex justify-center">
        <button
          onClick={handelSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Save & Publish
        </button>
      </div>
    </div>
  );
};

export default UploadProd;
