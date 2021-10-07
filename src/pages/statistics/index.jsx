import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {DoughnutChart, PageBack, Spinner, ToolTip} from "../../components";

import {getOrder} from "../../redux/crudSlice";

import * as S from './styled'

const Statistics = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getOrder())
    }, [dispatch])

    const {status} = useSelector(state => state.crud)

    return (
        <S.StatisticsContainer>
            <ToolTip position='right' text='home page'>
                <PageBack/>
            </ToolTip>

            {
               status ? <Spinner/> : <DoughnutChart/>
            }
        </S.StatisticsContainer>
    )
}

export default Statistics
