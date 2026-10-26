
import axios from "axios";

const api = axios.create({
  baseURL: `http://${window.location.hostname}:5035/api`,
  timeout: 10000,
});

export default api;
