import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    subreddit: null,
    isLoading: false,
    error: null,
};

export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async (query) => {
    try {
        const apiUrl = `https://www.reddit.com/r/${query}.json`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const posts = data.data.children.map((post) => ({
            id: post.data.id,
            title: post.data.title,
            author: post.data.author,
        }));
        const subreddit = data.data.children[0].data.subreddit;
        return {posts, subreddit};
    } catch (error) {
        throw new Error('Failed to fetch posts');
    }
});

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