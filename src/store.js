import { configureStore } from "@reduxjs/toolkit";
import postListReducer from "./features/postList/postListSlice";
import searchBarReducer from "./features/searchBar/searchBarSlice";

export default configureStore({
    reducer: {
        postList: postListReducer,
        searchBar: searchBarReducer,
    },
});