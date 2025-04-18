import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import prod from "../../images/prod.png";
import { editProduct } from "../../rudex/actions/productActions";
import { useParams } from "react-router-dom";

const EditProdHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [img, setImg] = useState(prod);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [sellprice, setSellprice] = useState(0);
  const [offerprice, setOfferprice] = useState(0);
  const [qty, setQty] = useState("");
  const [vendor, setVendor] = useState("");
  const [shortdesc, setShortdesc] = useState("");
  const [longdesc, setLongdesc] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  useEffect(() => {
    console.log("xxxxxxxx", id);
  }, [id]);
  //to change name state
  const onChangeName = (event) => {
    setName(event.target.value.trim());
    console.log(" Product Name:", event.target.value);
  };
  const onChangeSlug = (event) => {
    setSlug(event.target.value.trim());
    console.log(" Slug:", event.target.value);
  };
  const onChangeOfferprice = (event) => {
    const value = event.target.value;
    setOfferprice(
      value === "" ? "" : isNaN(parseFloat(value)) ? "" : parseFloat(value)
    );
    console.log(" Offer Price:", event.target.value);
  };

  const onChangeSellprice = (event) => {
    const value = event.target.value;
    setSellprice(
      value === "" ? "" : isNaN(parseFloat(value)) ? "" : parseFloat(value)
    );
    console.log(" Sell Price:", event.target.value);
  };

  const onChangeQty = (event) => {
    const value = event.target.value;
    setQty(value === "" ? "" : isNaN(parseInt(value)) ? "" : parseInt(value));
    console.log(" Sell Price:", event.target.value);
  };

  const onChangeVendor = (event) => {
    setVendor(event.target.value.trim());
    console.log(" Vendor:", event.target.value);
  };
  const onChangeShortdesc = (event) => {
    setShortdesc(event.target.value.trim());
  };
  const onChangeLongdesc = (event) => {
    setLongdesc(event.target.value.trim());
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  //when image change save it

  const res = useSelector((state) => state.addprodReducer?.editprod);
  console.log("editprod", res);

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_presentt");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/db8k3xnvf/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log("image url after upload", data.secure_url);

      if (data.secure_url) {
        return data.secure_url;
      } else {
        throw new Error("⚠️failed in upload img");
      }
    } catch (error) {
      console.error("error in upload", error);
      return null;
    }
  };

  //save data in database

  const handelSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setIsPress(true);

    let imageUrl = img; // الصورة الافتراضية

    // **UPload to Cloudinary**
    if (selectedFile) {
      const uploadedImageUrl = await uploadImageToCloudinary(selectedFile);
      if (uploadedImageUrl) {
        imageUrl = uploadedImageUrl;
      } else {
        alert("failed upload");
        setLoading(false);
        return;
      }
    }

    const productData = {
      Name: name || "Default Name",
      Slug: slug || "default-slug",
      ThumbImage: imageUrl,
      Price: parseFloat(sellprice) || 1,
      offerPrice: parseFloat(offerprice) || 1,
      Qty: parseInt(qty) || 1,
      VendorId: vendor || "3",
      ShortDescription: shortdesc || "Default short description",
      LongDescription: longdesc || "Default long description",
      seoTitle: "Handmade Genuine Leather Bag - Luxurious Design",
      seoDescription:
        "A stylish handmade leather bag crafted with premium materials, combining luxury and functionality.",
    };

    console.log(" البيانات المرسلة :", productData);

    await dispatch(editProduct(id, productData));

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setImg(prod);
      setName("");
      setSelectedFile(null);

      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
    }
  }, [loading]);

  return [
    img,
    name,
    slug,
    sellprice,
    offerprice,
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
    onChangeOfferprice,
    onChangeQty,
    onChangeVendor,
    onChangeShortdesc,
    onChangeLongdesc,
  ];
};

export default EditProdHook;
