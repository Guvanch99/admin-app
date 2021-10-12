import * as S from './styled'

const Pagination = ({countItems, setCurrentPage, currentPage}) => {

    let buttons = [...Array(countItems).keys()].map(i =>
        <S.PageButtons
            to='#'
            isActive={currentPage === i + 1}
            onClick={() => setCurrentPage(i + 1)} key={i}>
            {i + 1}
        </S.PageButtons>)

    return (
        <S.PaginationContainer>
            {buttons}
        </S.PaginationContainer>
    )
}
export default Pagination
