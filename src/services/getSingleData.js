import {DB} from "../core/axios";

export const getSingleData =  ({id, url}) =>  DB(`${url}/${id}`)