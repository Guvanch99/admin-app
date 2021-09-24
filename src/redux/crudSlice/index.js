import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import axios from "axios";

import {DB} from "../../core/axios";

import {ALL_PRODUCTS, FEATURED_PRODUCTS, GALLERY, USERS} from "../../constants/variables";

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

export const deleteItem = createAsyncThunk(
    'crud/delete',
    async ({id, url}, {dispatch}) => {
        await DB.delete(`${url}/${id}`)
        dispatch(deleteData({id, url}))

    }
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
        deleteData(state, action) {
            console.log("action",action)
            switch (action.payload.url) {
                case USERS:
                    state.users = [state.users[0], state.users[1].filter(user => user.id !== action.payload.id)]
                    break
                case GALLERY:
                    state.gallery = [state.gallery[0], state.gallery[1].filter(gallery => gallery.id !== action.payload.id)]
                    break
                case ALL_PRODUCTS:
                    state.products = [state.products[0], state.products[1].filter(product => product.id !== action.payload.id)]
                    break
                case FEATURED_PRODUCTS:
                    state.featuredProducts = [state.featuredProducts[0], state.featuredProducts[1].filter(featuredProduct => featuredProduct.id !== action.payload.id)]
                    break
                default:
                    return state
            }
        },
    },
    extraReducers: {
        [getData.pending]: (state) => {
            state.status = true
            state.error = false
        },
        [getData.fulfilled]: (state, action) => {
            state.status = false
            state.error = false
            console.log(action)
            state.products = [action.payload[0].config.url, action.payload[0].data]
            state.featuredProducts = [action.payload[1].config.url, action.payload[1].data]
            state.users = [action.payload[2].config.url, action.payload[2].data]
            state.gallery = [action.payload[3].config.url, action.payload[3].data]
        },
        [getData.rejected]:
            (state) => {
                state.error = true
                state.status = false
            }

    }
})

const {deleteData} = CrudSlice.actions

export default CrudSlice.reducer