import axios from "axios";

const url = process.env.PRODUCT_URL;

const apiInstance = axios.create({
  baseURL: "INVALID_URL",
});

apiInstance.interceptors.request.use(
  async function (config) {
    config.baseURL = url || "http://localhost:3001/api";
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default apiInstance;
