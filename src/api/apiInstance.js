import axios from "axios"; 


const apiInstance = axios.create({
  baseURL: "INVALID_URL",
});

apiInstance.interceptors.request.use(
  async function (config) {
    if(process.env.CURRENT_ENV === "production") {
      config.baseURL = "https://automobile-spare-parts-web.herokuapp.com/api";
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      return config;
    } else {
      config.baseURL = "http://localhost:3001/api";
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      return config;
      
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default apiInstance;
