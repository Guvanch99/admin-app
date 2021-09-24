import {createSlice} from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'Admin',
    initialState: {
        isAdmin: false,
        adminNotFound: false,
        isModal: false
    },
    reducers: {
        loginAdmin(state) {
            state.isAdmin = true
        },
        adminError(state) {
            state.adminNotFound = true
        },
        logOut(state) {
            state.isAdmin = false
        },
        toggleModal(state) {
            state.isModal = !state.isModal
        }



    },
})

export const {loginAdmin, logOut, adminError,toggleModal} = adminSlice.actions

export default adminSlice.reducer
