import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {DB} from "../../core/axios";
import axios from "axios";

export const getData = createAsyncThunk(
    'crud/getProducts',
    async () =>
         await axios.all([
            DB('/all-products'),
            DB('/featured-products'),
            DB('/users'),
            DB('/gallery')
        ])


)


const CrudSlice = createSlice({
    name: 'crud',
    initialState: {
        products: [],
        users: [],
        featuredProducts: [],
        gallery: [],
        status: false,
        error: false

    },
    reducers: {
        createPost(state, action) {
        },
        updatePost(state, action) {
        },
        deletePost(state, action) {
        },
    },
    extraReducers: {
        [getData.pending]: (state) => {
            state.status = true
            state.error = false
        },
        [getData.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.status = false
            state.error = false
            state.products = action.payload[0].data
            state.featuredProducts = action.payload[1].data
            state.users = action.payload[2].data
            state.gallery = action.payload[3].data
        },
        [getData.rejected]:
            (state) => {
                state.error = true
                state.status = false
            }

    }
})

const {} = CrudSlice.actions

export default CrudSlice.reducer