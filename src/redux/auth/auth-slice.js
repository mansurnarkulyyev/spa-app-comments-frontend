import { createSlice } from "@reduxjs/toolkit";
import { signUpRequest } from "./auth-operation";

const initialState = {
    user:{
        // information about user
    },
  email: null,
  token: "",
  isLogin: false,

  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
     [signUpRequest.pending]: (store) => ({...store, loading: true, error: null}),
        [signUpRequest.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;//в стор записываем полученные значение с пайлоада
            store.token = payload.token;
            store.isLogin = true;
        },
        [signUpRequest.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
  } 
}); 

export default authSlice.reducer;