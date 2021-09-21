import adminReducer from "./adminSlice";
import usersReducer from "./usersSlice";
import productsReducer from "./productsSlice";

export const reducer = {
    admin: adminReducer,
    users: usersReducer,
    products: productsReducer
}