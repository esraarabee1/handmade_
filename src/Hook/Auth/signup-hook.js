import React, { useState, useEffect } from "react";
import { createNewUser } from "../../rudex/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const RegisterHook = () => {
  console.log("🔄 RegisterHook is running!");
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
    setRolID(e.target.value);
  };

  const res = useSelector((state) => state.authReducer.createUser);

  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.error);

  useEffect(() => {
    console.log("Redux state updated:", { res, loading, error });
    if (res) {
      console.log("✅ User Created Successfully:", res.data.token);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/login");
      }
    }
    if (error) {
      console.error("❌ Error occurred:", error);
    }
  }, [res, loading, error]);

  //save data
  const OnSubmit = async () => {
    console.log(" OnSubmit function triggered!");

    const formData = new FormData();
    formData.append("FName", name);
    formData.append("LName", lastName);
    formData.append("Email", email);
    formData.append("Password", password);
    formData.append("ConfirmPassword", confirmPassword);
    formData.append("Phone", phone);
    formData.append("UserName", userName);
    formData.append("RoleId", rolID);

    console.log(" Form Data Created:", formData);

    await dispatch(createNewUser(formData));

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
    loading,
    onChangeName,
    onChangeLastName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    onChangeUserName,
    onChangeRoleId,
    OnSubmit,
  ];
};

export default RegisterHook;
