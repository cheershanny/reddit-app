import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        setSearchQuery: (action) => {
            return action.payload;
        },
    },
});

export const { setSearchQuery } = searchBarSlice.actions;
export default searchBarSlice.reducer;