
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3007/api",
});

const setToken = (token = "") => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

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

export async function logout() {
  const { data: result } = await instance.get("users/logout");
  setToken("");
  return result;
}

export async function getCurrent(token) {
  try {
    setToken(token);//временно добавляем старый токен если из сервера вернется успешно то вернем с резалт если ошибка то сбрасываем и вернем эррор
    const { data: result } = await instance.get("users/current");
    return result;
  } catch (error) {
    setToken("");
    throw error;
  }
}



// export async function securityCaptcha(data) {
//   const { data: result } = await instance.get("/captcha", data);
//   console.log(result);
//   return result;
// }
