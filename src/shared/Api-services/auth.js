import { instance } from "./api";

const setToken = (token = "") => {
    if (token) {
        return instance.defaults.headers.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.authorization = "";
}


export async function signup(data) {
  const { data: result } = await instance.post("/users/signup", data);
   setToken(result.token);
  return result;
}
