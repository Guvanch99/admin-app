import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {DoughnutChart, Spinner} from "../../components";

import {getData, getOrder, getOrders} from "../../redux/crudSlice";

import * as S from './styled'

const Statistics = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getOrder())
    }, [dispatch])

    const {orders,status} = useSelector(state => state.crud)
    console.log('orders', orders)

    return (
        <S.StatisticsContainer>
            {
               status ? <Spinner/> : <DoughnutChart/>
            }
        </S.StatisticsContainer>
    )
}

export default Statistics