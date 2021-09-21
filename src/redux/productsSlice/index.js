import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'Products',
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

const {} = productsSlice.actions

export default productsSlice.reducer