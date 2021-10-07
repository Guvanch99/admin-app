import {takeLatest, all, call} from 'redux-saga/effects'

import {handleData, handleDelete, handleOrders, handleUpdate} from "./worker";
import {deleteItem, getData, getOrder, updateItem} from "../crudSlice";

//watching action dispatch
export function* watcherGetData() {
    yield takeLatest(getData.type, handleData)
}

export function* watcherGetOrders() {
    yield takeLatest(getOrder.type, handleOrders)
}
export function* watcherDelete(){
    yield takeLatest(deleteItem.type, handleDelete)
}
export function* watcherUpdate(){
    yield takeLatest(updateItem.type,handleUpdate)
}
//rootSaga will be run watchers
export default function* rootSaga() {
    yield all([
        call(watcherGetData),
        call(watcherGetOrders),
        call(watcherDelete),
        call(watcherUpdate)
    ])
}