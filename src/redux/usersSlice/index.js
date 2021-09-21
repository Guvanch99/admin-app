import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'Users',
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

const {} = usersSlice.actions

export default usersSlice.reducer