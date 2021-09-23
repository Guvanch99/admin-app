import PropTypes from "prop-types"

import {TableBody, TableHeader} from "../index"

import * as S from "./styled"

const CustomTable = ({data}) => (
    <S.Table>
        <TableHeader/>
        <TableBody data={data}/>
    </S.Table>
)

export default CustomTable

CustomTable.propTypes = {
    data: PropTypes.array.isRequired
}