import {DATA} from "../../data"
import * as S from "./styled"

const {tableHeaderRow} = DATA

const TableHeader = () => (
    <thead>
    <S.THeaderRow>
        {tableHeaderRow.map((name, idx) => <S.THeadRowHeader key={idx}>{name}</S.THeadRowHeader>)}
    </S.THeaderRow>
    </thead>
)

export default TableHeader