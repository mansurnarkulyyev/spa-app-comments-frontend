import axios from "axios";
// https://spa-app-comments-backend-production-825f.up.railway.app/
export const instance = axios.create({
  baseURL: "https://spa-app-comments-backend-production-825f.up.railway.app/api",
});
