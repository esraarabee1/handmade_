import React from "react";
import AddProdHook from "../../Hook/Admin/addprod-hook";

const ProductDesc = () => {
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
  );
};

export default ProductDesc;
