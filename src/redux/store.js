import {configureStore} from "@reduxjs/toolkit";

import {reducer} from "./";

export default configureStore({
    reducer,
    middleware:(getDefaultMiddleware => getDefaultMiddleware({serializableCheck:false}))
})
