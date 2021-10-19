import {takeLatest, all, call} from 'redux-saga/effects'

import {handleData, handleDelete, handleOrders, handleProducts, handleUpdate, handleUsers} from "./worker";
import {deleteItem, getData, getOrder, getProducts, getUsers, updateItem} from "../crudSlice";

 function* watcherGetData() {
    yield takeLatest(getData.type, handleData)
}

 function* watcherGetOrders() {
    yield takeLatest(getOrder.type, handleOrders)
}

 function* watcherDelete(){
    yield takeLatest(deleteItem.type, handleDelete)
}

 function* watcherUpdate(){
    yield takeLatest(updateItem.type,handleUpdate)
}

 function* watcherGetProducts(){
    yield  takeLatest(getProducts.type,handleProducts)
}

function* watcherGetUsers(){
    yield  takeLatest(getUsers.type,handleUsers)
}

//rootSaga will be run watchers
export default function* rootSaga() {
    yield all([
        call(watcherGetData),
        call(watcherGetOrders),
        call(watcherDelete),
        call(watcherUpdate),
        call(watcherGetProducts),
        call(watcherGetUsers)
    ])
}