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