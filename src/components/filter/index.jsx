import {memo, useEffect, useState} from "react";

import {useSelector, useDispatch} from "react-redux";

import {getOrder} from "../../redux/crudSlice";

import {onChange, filterTransactions} from "../../redux/filterSlice";

import {DATA} from "../../data";

import * as S from './styled'
import {ButtonFilter, Label} from "./styled";
import {PERIOD} from "../../constants/variables";

const {filterOptions} = DATA

const Filter = () => {
    const [isVisibleFilter, setIsVisibleFilter] = useState(false)

    const {sort, filteredOrders} = useSelector(state => state.filter)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrder())
    }, [dispatch])
    /* dispatch(filterTransactions())*/
    useEffect(() => {
        dispatch(filterTransactions())
    }, [sort, dispatch])
    const updateSort = ({target: {value}}) => {
        dispatch(onChange({value}))
    }

    const toggleVisible = () => setIsVisibleFilter(!isVisibleFilter)
    console.log(sort===PERIOD)
    return (
        <S.Filter>
            <S.Tag>

            </S.Tag>
            <S.FilterDivider>
                <div>
                    <S.ButtonFilter bg={isVisibleFilter} onClick={toggleVisible}>
                        Date
                        <S.Icon className={`fas fa-sort-${isVisibleFilter ? 'up' : 'down'}`}/>
                    </S.ButtonFilter>
                    <S.FilterOptionContainer isVisible={isVisibleFilter}>
                        {filterOptions.map((name) => (
                            <S.FilterInfoContainer key={name}>
                                <S.RadioContainer>
                                    <input
                                        value={name}
                                        name='day'
                                        id={name}
                                        type='radio'
                                        onChange={updateSort}
                                    />
                                    <S.Label>{name}</S.Label>
                                </S.RadioContainer>
                                <S.HorizontalLine/>
                            </S.FilterInfoContainer>
                        ))}
                        {
                            sort === PERIOD ? (
                                <div>
                                    <input type='number' min={0} max={9} maxLength={9}  />
                                    <input/>
                                </div>
                            ) : null
                        }
                        <button>Apply</button>
                    </S.FilterOptionContainer>

                </div>
                {filteredOrders.length > 0 ? <S.OrdersList>
                    <S.InfoContainer>
                        <S.UserName orange>Name:</S.UserName>
                        <S.TotalAmount orange>Money:</S.TotalAmount>
                    </S.InfoContainer>
                    {
                        filteredOrders.map(({totalAmount, user: {userName}}, idx) => (
                                <S.InfoContainer key={idx}>
                                    <S.UserName>{userName}</S.UserName>
                                    <S.TotalAmount>{totalAmount} rub</S.TotalAmount>
                                </S.InfoContainer>

                            )
                        )
                    }
                </S.OrdersList> : null}
            </S.FilterDivider>
        </S.Filter>
    )
}

export default memo(Filter)