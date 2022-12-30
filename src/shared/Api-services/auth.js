
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3007/api",
});

const setToken = (token = "") => {
    instance.defaults.headers.authorization = `Bearer ${token}`;
}

export async function signup(data) {
  const { data: result } = await instance.post("/users/signup", data);
   setToken(result.token);
  return result;
}

export async function login(data) {
  const { data: result } = await instance.post("/users/login", data);
   setToken(result.token);
  return result;
}

// export async function securityCaptcha(data) {
//   const { data: result } = await instance.get("/captcha", data);
//   console.log(result);
//   return result;
// }
