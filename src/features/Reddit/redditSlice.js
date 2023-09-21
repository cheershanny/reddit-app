import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {
        fetchPostsRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchPostsSuccess: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        },
        fetchPostsFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {fetchPostsRequest, fetchPostsFailure, fetchPostsSuccess} = redditSlice.actions;
export const selectRedditPosts = (state) => state.reddit.posts; 
export const selectRedditLoading = (state) => state.reddit.isLoading; 
export const selectRedditError = (state) => state.reddit.error; 
export default redditSlice.reducer;