import { createSlice } from "@reduxjs/toolkit";

import {addPost, fetchPosts, removePost} from "./post-operation";

const initialState = {
    items: [],
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
            console.log(payload);
            store.items.push(payload);
            console.log(store.items)
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
             // store.items= store.items.findIndex(item => item._id !== payload);
             console.log(payload);
            console.log(store.items);
            store.loading= false;
        },

        [removePost.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        }
    }
});

export default postsSlice.reducer;