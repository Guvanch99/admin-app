import {call, put} from 'redux-saga/effects'

import {deleteData, setData, setOrder} from "../../crudSlice";

import {requestData, requestDelete, requestOrders, requestUpdate} from "../requests";

export function* handleData() {
    const res = yield call(requestData)
    yield put(setData({...res}))
}

export function* handleOrders() {
    const res = yield call(requestOrders)
    yield put(setOrder({res}))
}

export function* handleDelete({payload}) {
    const {id, url} = payload
    try {
        yield call(requestDelete, payload)
        yield put(deleteData({id, url}))
    } catch (error) {
        console.log(error)
    }
}

export function* handleUpdate({payload}) {
    console.log("pY",payload)
    yield call(requestUpdate, payload)
}

