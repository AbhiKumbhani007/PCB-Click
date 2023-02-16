import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    "x-project": "pcb_click",
  },
});
api.interceptors.request.use(
  function (config) {
    config.headers.Authorization = localStorage.getItem("token");

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("error", error);
    return Promise.reject(error);
  }
);

export default api;
