import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://94.158.244.59:8000",
  timeout: 50000,
});
