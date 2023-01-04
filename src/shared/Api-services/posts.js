import { instance } from "./api";


export const getPosts = async () => {
  const { data } = await instance.get("/posts", 
  // {
    // params: {
    //   _page,
    // },
  // }
  );
  // console.log(data);
  return data;
};


export async function addPost(data) {
  const { data: result } = await instance.post("/posts", data,{headers:{"Content-Type":"multipart/form-data"}});
  return result;
}

export async function addInnerPost(data) {
  const { data: result } = await instance.put("/posts/comment/post");
  console.log(result);
  return result;
}


export const deletePosts = async (id) => {
  const { data } = await instance.delete(`/posts/${id}`);
  return data;
};



