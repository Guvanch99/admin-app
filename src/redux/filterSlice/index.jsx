import {createSlice} from "@reduxjs/toolkit";

import moment from "moment";

import { EMPTY, LAST_WEEK, MONTH, TODAY, TWO_MONTH, TWO_WEEKS} from "../../constants/variables";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        sort: "",
        allOrders: [],
        filteredOrders: []
    },
    reducers: {
        onChange(state, {payload: {value}}) {
            state.sort = value
        },
        setOrders(state, {payload}) {
            state.allOrders = payload.data
        },
        filterTransactions(state) {
            const { allOrders, sort} = state
            let temp = [...allOrders]
            let today = moment()
            switch (sort) {
                case EMPTY:
                    state.filteredOrders=[]
                    break;
                case TODAY:
                    let startOfDay = moment().startOf('day')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(startOfDay, today))
                    state.filteredOrders = temp
                    break;
                case LAST_WEEK:
                    let lastWeek = moment().startOf('day').subtract(1, 'week')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(lastWeek, today))
                    state.filteredOrders = temp
                    break;
                case TWO_WEEKS:
                    let lastTwoWeeks = moment().startOf('day').subtract(2, 'week')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(lastTwoWeeks, today))
                    state.filteredOrders = temp
                    break;
                case MONTH:
                    let lastMonth = moment().startOf('day').subtract(1, 'month')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(lastMonth, today))
                    state.filteredOrders = temp
                    break;
                case TWO_MONTH:
                    let today4 = moment()
                    let startOfDay4 = moment().startOf('day').subtract(2, 'month')
                    temp = temp.filter(({timeOrder}) => moment(timeOrder).isBetween(startOfDay4, today4))
                    state.filteredOrders = temp
                    break;
                default:
                    state.filteredOrders = []
            }

        }
    }
})

export const {onChange, setOrders, filterTransactions} = filterSlice.actions

export default filterSlice.reducer