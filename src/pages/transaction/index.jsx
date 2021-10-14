import {Filter} from "../../components";

import * as S from './styled'

const Transaction = () => {
    return (
        <S.Container>
            <S.TransactionText>
                Select Filter date
            </S.TransactionText>
            <Filter/>
        </S.Container>
    )
}
export default Transaction