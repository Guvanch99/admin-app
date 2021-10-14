import {memo, useEffect} from "react";

import {useSelector, useDispatch} from "react-redux";

import {getOrder} from "../../redux/crudSlice";

import {onChange, filterTransactions} from "../../redux/filterSlice";

import {DATA} from "../../data";

import * as S from './styled'
import {OrdersList} from "./styled";


const {filterOptions} = DATA

const Filter = () => {
    const {sort, filteredOrders} = useSelector(state => state.filter)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrder())
    }, [dispatch])

    useEffect(() => {

        dispatch(filterTransactions())

    }, [dispatch, sort])

    const updateSort = ({target: {value}}) => {
        dispatch(onChange({value}))
    }

    return (
        <div>
            <S.Tag>

            </S.Tag>
            <S.Select
                onChange={updateSort}
                value={sort}
            >
                {filterOptions.map((item, idx) => (
                    <option
                        key={idx}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </S.Select>
            <S.OrdersList>
                {
                    filteredOrders.map(({totalAmount, user: {userName}}) => (
                            <S.Order>
                                <S.InfoContainer>
                                    <S.UserName>{userName}</S.UserName>
                                    <S.TotalAmount>{totalAmount} rub</S.TotalAmount>
                                </S.InfoContainer>
                            </S.Order>
                        )
                    )
                }
            </S.OrdersList>
        </div>
    )
}

export default memo(Filter)