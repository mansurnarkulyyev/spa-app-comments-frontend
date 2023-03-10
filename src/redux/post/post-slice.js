import { createSlice } from "@reduxjs/toolkit";

import {addPost, fetchPosts, removePost} from "./post-operation";

const initialState = {
    items: [],
    tags:[],
    comments:[],
    loading: false,
    error: null
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        //get
        [fetchPosts.pending]: (store) => ({...store, loading: true, error: null}),
        [fetchPosts.fulfilled]: (store, {payload}) => {
            store.items = payload;
            store.loading = false;
        },
        [fetchPosts.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),

        //add poost
        [addPost.pending]: (store) => ({...store, loading: true, error: null}),
        [addPost.fulfilled]: (store, {payload}) => {
            store.items.push(payload);
            store.loading = false;
        },
        [addPost.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
      

        //delete
        [removePost.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [removePost.fulfilled]: (store, {payload}) => {
            store.items= store.items.filter(item => item._id !== payload);
            store.loading= false;
        },

        [removePost.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        }
    }
});

export default postsSlice.reducer;