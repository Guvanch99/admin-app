import * as S from './styled'

const Pagination = ({countItems,setCurrentPage}) => {
    let buttons = [...Array(countItems).keys()].map(i =>
        <S.PageButtons onClick={()=>setCurrentPage(i + 1)} key={i + 1}>{i + 1}</S.PageButtons>)

    return (
        <S.PaginationContainer>
        {buttons}
        </S.PaginationContainer>
    )
}
export default Pagination
