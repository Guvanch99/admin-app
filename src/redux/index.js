import dbSlice from "./dbSlice";
import productsSlice from "./productsSlice";
import usersSlice from "./usersSlice";

export const rootReducers={
    db:dbSlice,
    users:usersSlice,
    products:productsSlice
}