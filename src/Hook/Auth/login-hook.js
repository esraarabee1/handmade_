import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../rudex/actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPress, setIsPress] = useState(false);

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    setIsPress(true);
    await dispatch(
      loginUser({
        userName,
        password,
      })
    );
    setIsPress(false);
  };

  const res = useSelector((state) => state.authloginReducer.loginUser);
  const loading = useSelector((state) => state.authloginReducer.loading);

  useEffect(() => {
    if (!loading && res) {
      console.log("✅ Login Response:", res);

      // 🔹 تأكد أن `res` يحتوي على `data`
      if (res && res.data.token) {
        console.log("🔹 User Token:", res.data.token);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));

        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        console.warn("❌ No token found in response, clearing storage...");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, [res, loading]);

  return [
    userName,
    password,
    loading,
    onChangeUserName,
    onChangePassword,
    onSubmit,
    isPress,
  ];
};

export default LoginHook;
