
import axios from "axios";

const localApiUrl = `http://${window.location.hostname}:5035/api`;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || localApiUrl,
  timeout: 10000,
});

export default api;
