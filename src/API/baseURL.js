import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://harfty.runasp.net",
});

export default baseUrl;
