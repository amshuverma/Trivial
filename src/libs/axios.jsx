import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

const authRequestInterceptor = (config) => {
  config.headers.Accept = "application/json";
  return config;
};

axios.interceptors.request.use(authRequestInterceptor);
