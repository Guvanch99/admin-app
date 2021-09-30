import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

import {getTotals} from "../../utils";

import {EXPECTED_INCOME} from "../../constants/variables";

import * as S from './styled'


const DoughnutChart = () => {
    const [circleData, setCircleData] = useState()
    const {orders} = useSelector(state => state.crud)

    useEffect(() => {
        const circleElements = getTotals(orders)
        setCircleData(circleElements)
    }, [orders])

    const {comboPercent, durumPercent, beveragePercent, total} = circleData
    return (
        <S.ChartContainer>
            <S.ChartLabel>Doughnut Chart</S.ChartLabel>
            <S.InfoContainer>
                <S.Info>
                    <S.InfoLabel>Remain</S.InfoLabel>
                    <S.InfoBox>
                        <S.LeftCircle/>
                        <S.Money>$ {EXPECTED_INCOME - total}</S.Money>
                    </S.InfoBox>
                </S.Info>
                <S.Info>
                    <S.InfoLabel>Earned</S.InfoLabel>
                    <S.InfoBox>
                        <S.RightCircle/>
                        <S.Money>$ {total}</S.Money>
                    </S.InfoBox>
                </S.Info>
            </S.InfoContainer>
            <S.SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 50" width="100%" height="100%">
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#C2C8D6"
                        strokeWidth="1"/>
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#46C379"
                        strokeWidth="1" strokeDasharray={`${comboPercent} calc(100-${comboPercent}`}
                        strokeDashoffset='25' strokeLinecap='round'/>
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#000084"
                        strokeWidth="1" strokeDasharray={`${durumPercent} calc(100-${durumPercent}`}
                        strokeDashoffset="85" strokeLinecap='round'/>
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="brown"
                        strokeWidth="1" strokeDasharray={`${beveragePercent} calc(100-${beveragePercent}`}
                        strokeDashoffset="65" strokeLinecap='round'/>
                <g>
                    <S.ChartNumber x='50%' y='50%'>
                        {EXPECTED_INCOME}
                    </S.ChartNumber>
                    <S.ChartLabelT x='50%' y='50%'>
                        EXPECTED INCOME
                    </S.ChartLabelT>
                </g>
            </S.SVG>
        </S.ChartContainer>
    )
}

export default DoughnutChart

DoughnutChart.propTypes = {
    durum: PropTypes.number,
    beverage: PropTypes.number,
    combo: PropTypes.number
}
