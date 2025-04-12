import baseUrl from "../API/baseURL";

const useInsertDataWithImage = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, parmas, config);
  return res;
};

const useInsertData = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "application/json", // تأكد إنها موجودة
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  try {
    const res = await baseUrl.post(url, params, config);
    return res;
  } catch (error) {
    console.error("Error Response:", error.response);
    return error.response; // علشان ترجع التفاصيل وتشوف الرسالة لو فيه خطأ
  }
};

export { useInsertData, useInsertDataWithImage };
