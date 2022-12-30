import { createSlice } from "@reduxjs/toolkit";
import { loginRequest, signUpRequest} from "./auth-operation";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
    captcha:{},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
        [signUpRequest.pending]: (store) => ({...store, loading: true, error: null}),
        [signUpRequest.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;//в стор записываем полученные значение с пайлоада(пойлоад это тот же токен и даннае юзера,то что получаем при запроса или при регистрации email,name...)
            store.token = payload.token;
            store.isLogin = true;
        },
        [signUpRequest.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),//если не успешно зхарегистрировались
     
        [loginRequest.pending]: (store) => ({...store, loading: true, error: null}),
        [loginRequest.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;//в стор записываем полученные значение с пайлоада(пойлоад это тот же токен и даннае юзера,то что получаем при запроса или при регистрации email,name...)
            store.token = payload.token;
            store.isLogin = true;
        },
        [loginRequest.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),//если не успешно зхарегистрировались
        // [fetchCaptcha.pending]: (store) => ({...store, loading: true, error: null}),
        // [fetchCaptcha.fulfilled]: (store, {payload}) => {
        //     store.loading = false;
        //     store.captcha = payload;
        //     store.isLogin = true;
        // },
        // [fetchCaptcha.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),//если не успешно зхарегистрировались
  } 
}); 

export default authSlice.reducer;