import PropTypes from "prop-types"

import {TableBody, TableHeader} from "../index"

import * as S from "./styled"

const CustomTable = ({data,deleteHandler}) => (
    <S.Table>
        <TableHeader/>
        <TableBody data={data} deleteHandler={deleteHandler}/>
    </S.Table>
)

export default CustomTable

CustomTable.propTypes = {
    data: PropTypes.array.isRequired
}