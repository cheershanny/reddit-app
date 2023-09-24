import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "postList/fetchPosts",
  async (query) => {
    try {
      const response = await axios.get(
        `https://www.reddit.com/search.json?q=${query}`
      );
      return response.data.data.children.map((child) => child.data);
    } catch (error) {
      throw error;
    }
  }
);

const postListSlice = createSlice({
  name: "postList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.posts = [];
      });
  },
});

export const selectAllPostList = (state) => state.postList.posts;
export const isLoading = (state) => state.postList.isLoading;
export default postListSlice.reducer;
