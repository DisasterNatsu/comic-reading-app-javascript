import axios from "axios";

export const Axios = axios.create({
  baseURL: "yourBaseUrl",
  timeout: 50000,
});
