import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
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

const {} = ProductsSlice.actions

export default ProductsSlice