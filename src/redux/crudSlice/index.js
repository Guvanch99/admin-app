import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import {DB} from "../../core/axios";

import {ALL_PRODUCTS, FEATURED_PRODUCTS, GALLERY, NEXT_ID, ORDERS, PRICE, USERS} from "../../constants/variables";

export const getData = createAsyncThunk(
    'crud/getProducts',
    async () =>
        await axios.all([
            DB(ALL_PRODUCTS),
            DB(FEATURED_PRODUCTS),
            DB(USERS),
            DB(GALLERY)
        ])
)

export const deleteItem = createAsyncThunk(
    'crud/delete',
    async ({id, url}, {dispatch}) => {
        await DB.delete(`${url}/${id}`)
        dispatch(deleteData({id, url}))
    }
)

export const updateSingleData = (id, url, updatedData) => {

    const isPrice = updatedData.hasOwnProperty(PRICE)
    isPrice ? DB.patch(`${url}/${id}`, {
        ...updatedData,
        price: Number(updatedData.price)
    }) : DB.patch(`${url}/${id}`, updatedData)
}

export const getOrder = createAsyncThunk(
    'crud/orders',
    async () => {
        const {data} = await DB(ORDERS)
        return data

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
        error: false,
        isModal: false,
        orders: []
    },
    reducers: {
        addNewData(state, {payload: {newData}}) {
            const product = {id: state.products[1].length + NEXT_ID, ...newData,}
            state.products[1].push(product)
        },
        deleteData(state, {payload}) {
            switch (payload.url) {
                case USERS:
                    state.users = [state.users[0], state.users[1].filter(user => user.id !== payload.id)]
                    break
                case GALLERY:
                    state.gallery = [state.gallery[0], state.gallery[1].filter(gallery => gallery.id !== payload.id)]
                    break
                case ALL_PRODUCTS:
                    state.products = [state.products[0], state.products[1].filter(product => product.id !== payload.id)]
                    break
                case FEATURED_PRODUCTS:
                    state.featuredProducts = [state.featuredProducts[0], state.featuredProducts[1].filter(featuredProduct => featuredProduct.id !== payload.id)]
                    break
                default:
                    return state
            }
        },
    },
    extraReducers: {
        [getData.pending]: state => {
            state.status = true
            state.error = false
        },
        [getData.fulfilled]: (state, {payload}) => {
            state.status = false
            state.error = false
            state.products = [payload[0].config.url, payload[0].data]
            state.featuredProducts = [payload[1].config.url, payload[1].data]
            state.users = [payload[2].config.url, payload[2].data]
            state.gallery = [payload[3].config.url, payload[3].data]
        },
        [getData.rejected]: state => {
            state.error = true
            state.status = false
        },
        [getOrder.pending]: state => {
            state.status = true
            state.error = false
        },
        [getOrder.fulfilled]: (state, {payload}) => {
            state.status = false
            state.error = false
            state.orders = payload
        },
        [getOrder.rejected]: state => {
            state.error = true
            state.status = false
        },
    }
})

export const {deleteData, addNewData} = CrudSlice.actions

export default CrudSlice.reducer
