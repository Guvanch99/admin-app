import adminReducer from "./adminSlice";
import crudSlice from './crudSlice'

export const reducer = {
    admin: adminReducer,
    crud:crudSlice
}