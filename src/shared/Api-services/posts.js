import { instance } from "./api";


export const getPosts = async (_page = 1) => {
  const { data } = await instance.get("/posts", {
    params: {
      _page,
    },
  });
  console.log(data);
  return data;
};


export async function addPost(data) {
  const { data: result } = await instance.post("/posts", data,{headers:{"Content-Type":"multipart/form-data"}});
  return result;
}


export const deletePosts = async (id) => {
  const { data } = await instance.delete(`/posts/${id}`);
  return data;
};




// const instance = axios.create({
//     baseURL: "https://62becfba0bc9b125615fd0f7.mockapi.io/api/books"
// });

// export const getBooks = async () => {
//     const {data} = await instance.get("/");
//     return data;
// }

// export const addBook = async(data) => {
//     const {data: result} = await instance.post("/", data);
//     return result;
// }

// export const updateBook = async(id, data) => {
//     const {data: result} = await instance.put(`/${id}`, data);
//     return result;
// }

// export const removeBook = async(id) => {
//     const {data} = await instance.delete(`/${id}`);
//     return data;
// }