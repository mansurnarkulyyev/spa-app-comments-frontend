import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/Api-services/posts";

//get all posts

export const fetchPosts = createAsyncThunk(
    "posts/fetch",
    async(_, {rejectWithValue}) => {
        try {
            const result = await api.getPosts();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

//add post
export const addPost = createAsyncThunk(
    "posts/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addPost(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, {getState}) => {
            const {posts} = getState();
            const {title, user} = data;
            const isDublicate = posts.items.find(item => item.title === title && item.user === user);
            if(isDublicate) {
                alert(`${title}. ${user} is already exist`);
                return false;
            }
        }
    }
)


//addInnerPost
export const addInnerPost = createAsyncThunk(
    "posts/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addInnerPost(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, {getState}) => {
            const {posts} = getState();
            const {comment, user} = data;
            const isDublicate = posts.items.find(item => item.comment === comment && item.user === user);
            if(isDublicate) {
                alert(`${comment}. ${user} is already exist`);
                return false;
            }
        }
    }
)



//delete
export const removePost = createAsyncThunk(
    "posts/remove",
    async(id, {rejectWithValue}) => {
        try {
            const result = await api.deletePosts(id);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
