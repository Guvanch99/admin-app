import {call, put} from 'redux-saga/effects'

import {deleteData, setData, setOrder, setProducts, setUsers} from "../../crudSlice";

import {requestData, requestDelete, requestOrders, requestProducts, requestUpdate, requestUsers} from "../requests";

export function* handleData() {
    const res = yield call(requestData)
    yield put(setData({...res}))
}

export function* handleOrders() {
    const {data} = yield call(requestOrders)
    yield put(setOrder({data}))
}

export function* handleProducts({payload}) {
    const res = yield call(requestProducts,payload)
    yield put(setProducts({...res}))
}

export function* handleUsers({payload}) {
    const res = yield call(requestUsers,payload)
    yield put(setUsers({...res}))
}

export function* handleDelete({payload}) {
    const {id, url} = payload

    yield call(requestDelete, payload)
    yield put(deleteData({id, url}))

}

export function* handleUpdate({payload}) {
    yield call(requestUpdate, payload)
}

