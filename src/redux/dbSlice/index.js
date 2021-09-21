import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const DbSlice = createSlice({
    name: 'Db',
    initialState: [],
    reducers: {
        createPost(state, action) {
        },
        updatePost(state, action) {
        },
        deletePost(state, action) {
        },
    },
})

const {} = DbSlice.actions

export default DbSlice