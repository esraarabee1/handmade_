import React, { useState, useEffect } from "react";
import { createNewUser } from "../../rudex/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createVendor } from "../../rudex/actions/adminActions";
const AddvendorHook = () => {
  console.log("🔄 AddvendorHook is running!");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rolID, setRolID] = useState("");
  const [banner, setBanner] = useState("");
  const [description, setDescription] = useState("");
  const [load, setLoad] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onChangeRoleId = (e) => {
    setRolID(e.target.value); // لا تستخدم Number()
  };
  const onChangeBanner = (e) => {
    setBanner(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const res = useSelector((state) => state.addvendorReducer.addvendor);

  useEffect(() => {
    console.log("Redux state updated:", res);
    if (res) {
      console.log("✅ vendor Created Successfully:", res);

      navigate("/viewvendors");
    }
  }, [res]);

  //save data
  const OnSubmit = async () => {
    console.log(" OnSubmit function triggered!");

    const data = {
      FName: name,
      LName: lastName,
      Email: email,
      Password: password,
      ConfirmPassword: confirmPassword,
      Phone: phone,
      UserName: userName,
      RoleId: rolID,
      Banner: banner,
      Description: description,
    };

    console.log("📦 Form Data Created:", data);

    await dispatch(createVendor(data));

    console.log("✅ Dispatch finished!");
    setLoad(false);
  };

  return [
    name,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    userName,
    rolID,
    banner,
    description,
    onChangeName,
    onChangeLastName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    onChangeUserName,
    onChangeRoleId,
    OnSubmit,
    onChangeBanner,
    onChangeDescription,
  ];
};

export default AddvendorHook;
