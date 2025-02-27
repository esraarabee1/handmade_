import baseUrl from "../API/baseURL";

const getData = async (url, params) => {
  const res = await baseUrl.get(url, { params });
  return res;
};

const useGetDataToken = async (url, params = {}) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    params, // ✅ تمرير البارامترات بشكل صحيح
  };

  console.log("📌 Fetching from API:", url, "with params:", params);

  try {
    const res = await baseUrl.get(url, config);
    console.log("✅ API Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("❌ Error in useGetDataToken:", error);
    return null;
  }
};

export { getData, useGetDataToken };
