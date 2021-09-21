import {configureStore} from "@reduxjs/toolkit";

import {rootReducers} from "./index";

const store = configureStore({
    reducer: rootReducers
})

export default store