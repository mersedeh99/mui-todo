
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tagList: [],
};

export const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        setTags: (state, action) => {
            state.tagList = [...state.tagList, action.payload];
        },
        deleteTag: (state, action) => {
            state.tagList.splice(action.payload, 1)
            state.tagList = state.tagList;
        },
    },
});

export const { setTags, deleteTag } = tagsSlice.actions;

export const getTags = (state) => state.tags.tagList;

export default tagsSlice.reducer;
