import axios from "axios";

import {DB} from "../../../core/axios";

import {ALL_PRODUCTS, ORDERS, PRICE} from "../../../constants/variables";
import {ROUTER_FEATURED_PRODUCTS, ROUTER_GALLERY, ROUTER_USERS} from "../../../constants/routers";

export async function requestData() {
    try {
        return await axios.all([
            DB(ROUTER_FEATURED_PRODUCTS),
            DB(ROUTER_GALLERY)
        ])
    } catch (error) {
        console.log(error)
    }
}

export async function requestProducts(page) {
    console.log('requestProducts',page)
    try {
        return await DB(`${ALL_PRODUCTS}?_limit=4&_page=${page}`)
    } catch (error) {
        console.log(error)
    }
}

export async function requestUsers(page) {
    try {
        return await DB(`${ROUTER_USERS}?_limit=4&_page=${page}`)
    } catch (error) {
        console.log(error)
    }
}

export async function requestOrders() {
    try {
        return await DB(ORDERS);
    } catch (error) {
        console.log(error)
    }
}

export async function requestDelete({url, id}) {
    try {
        await DB.delete(`${url}/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export async function requestUpdate({id, url, singleData}) {
    try {
        const isPrice = singleData.hasOwnProperty(PRICE)
        isPrice ? await DB.patch(`${url}/${id}`, {
            ...singleData,
            price: Number(singleData.price)
        }) : await DB.patch(`${url}/${id}`, singleData)
        url === ROUTER_USERS ?
            await DB.patch(`${url}/${id}`, {
                ...singleData,
                restrictedPromoCodes: [singleData.restrictedPromoCodes]
            })
            : await DB.patch(`${url}/${id}`, singleData)

    } catch
        (error) {
        console.log(error)
    }
}
