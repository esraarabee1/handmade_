import baseUrl from "../API/baseURL";

const useDeleteData = async (url, params) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      params, // ✅ تمرير الـ params هنا
    };
    const res = await baseUrl.delete(url, config);

    // ✅ تأكد من وجود البيانات قبل إرجاعها
    return res?.data || {};
  } catch (error) {
    console.error("Error in useDeleteData:", error);
    return {}; // ✅ إرجاع كائن فارغ لتجنب كسر التطبيق
  }
};

export default useDeleteData;
