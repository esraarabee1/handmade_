import baseUrl from "../API/baseURL";

const useDeleteData = async (url, params) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      params,
    };
    const res = await baseUrl.delete(url, config);

    return res?.data || {};
  } catch (error) {
    console.error("Error in useDeleteData:", error);
    return {};
  }
};

export default useDeleteData;
