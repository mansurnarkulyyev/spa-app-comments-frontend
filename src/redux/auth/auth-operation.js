import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/Api-services/auth";

export const signUpRequest = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.signup(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const loginRequest = createAsyncThunk(
    "auth/login",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.login(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

// export const fetchCaptcha = createAsyncThunk(
//     "auth/captcha",
//     async(_, {rejectWithValue}) => {
//         try {
//             const result = await api.securityCaptcha();
//             return result;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// )
