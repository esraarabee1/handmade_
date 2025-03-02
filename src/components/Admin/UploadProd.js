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
    <div className="flex flex-1 gap-4">
      <div className="w-2/3 bg-white pt-7 pb-7 pl-[33px] pr-[33px] rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-4 w-full">
            <input
              value={name}
              onChange={onChangeName}
              className="p-2 border rounded-md"
              type="text"
              placeholder="Product Name"
            />
            <input
              value={slug}
              onChange={onChangeSlug}
              className="p-2 border rounded-md"
              type="text"
              placeholder="Slug"
            />
            <input
              value={sellprice}
              onChange={onChangeSellprice}
              className="p-2 border rounded-md"
              type="text"
              placeholder="Selling Price"
            />
            <input
              value={qty}
              onChange={onChangeQty}
              className="p-2 border rounded-md"
              type="number"
              placeholder="Quantity in Stock"
            />
            <input
              value={vendor}
              onChange={onChangeVendor}
              className="p-2 border rounded-md"
              type="text"
              placeholder="Vendor ID"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-gray-700">Product Short Description</h3>
            <textarea
              value={shortdesc}
              onChange={onChangeShortdesc}
              className="pb-10 border rounded-md"
              placeholder="Short Description"
            ></textarea>
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-700">Product Long Description</h3>
              <textarea
                value={longdesc}
                onChange={onChangeLongdesc}
                className="pb-10 border rounded-md"
                placeholder="Add a long description for your product"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
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
      </div>
    </div>
  );
};

export default UploadProd;
