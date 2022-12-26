import { instance } from "./api";

export async function signup(data) {
  const { data: result } = await instance.post("/users/signup", data);
  return result;
}
