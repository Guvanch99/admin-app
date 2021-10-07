import axios from "axios";

import {DB} from "../../../core/axios";

import {ALL_PRODUCTS, BONUS, ORDERS, PRICE} from "../../../constants/variables";
import {ROUTER_FEATURED_PRODUCTS, ROUTER_GALLERY, ROUTER_USERS} from "../../../constants/routers";

export async function requestData() {
    return await axios.all([
        DB(ALL_PRODUCTS),
        DB(ROUTER_FEATURED_PRODUCTS),
        DB(ROUTER_USERS),
        DB(ROUTER_GALLERY)
    ])
}

export async function requestOrders() {
    try {
        const {data} = await DB(ORDERS);
        return data
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
    console.log(id, url, singleData)
    try {
        const isPrice = singleData.hasOwnProperty(PRICE)
        isPrice ? await DB.patch(`${url}/${id}`, {
            ...singleData,
            price: Number(singleData.price)
        }) : await DB.patch(`${url}/${id}`, singleData)
    } catch (error) {
        console.log(error)
    }
}
