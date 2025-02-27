import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://harfty.runasp.net",
});

export default baseUrl;
