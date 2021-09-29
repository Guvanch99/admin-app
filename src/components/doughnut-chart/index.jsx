import React from "react";
import PropTypes from "prop-types";

import * as S from './styled'

const DoughnutChart = ({durum, beverage, combo}) => (
    <S.ChartContainer>
        <S.ChartLabel>Doughnut Chart</S.ChartLabel>
        <S.InfoContainer>
            <S.Info>
                <S.InfoLabel>Remain</S.InfoLabel>
                <S.InfoBox>
                    <S.LeftCircle/>
                    <S.Money>$500</S.Money>
                </S.InfoBox>
            </S.Info>
            <S.Info>
                <S.InfoLabel>Earned</S.InfoLabel>
                <S.InfoBox>
                    <S.RightCircle/>
                    <S.Money>$500</S.Money>
                </S.InfoBox>
            </S.Info>
        </S.InfoContainer>
        <S.SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 50" width="100%" height="100%">
            <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#C2C8D6"
                    strokeWidth="1"/>
            <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#46C379"
                    strokeWidth="1" strokeDasharray="40 60" strokeDashoffset='25' strokeLinecap='round'/>
            <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#000084"
                    strokeWidth="1" strokeDasharray="30 70" strokeDashoffset="85" strokeLinecap='round'/>
            <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="brown"
                    strokeWidth="1" strokeDasharray="30 80" strokeDashoffset="65" strokeLinecap='round'/>
            <g>
                <S.ChartNumber  x='50%' y='50%'>
                    $1000
                </S.ChartNumber>
                <S.ChartLabelT  x='50%' y='50%'>
                    INCOME
                </S.ChartLabelT>
            </g>
        </S.SVG>
    </S.ChartContainer>
)

export default DoughnutChart

DoughnutChart.propTypes = {
    durum: PropTypes.number,
    beverage: PropTypes.number,
    combo: PropTypes.number
}