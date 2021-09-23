import PropTypes from "prop-types"

import {CustomButton} from "../index"

import * as S from "./styled"

const TableBody = ({data}) => {
    const handleDelete = () => (
        console.log('b')
    )
    const handleEdit = () => (
        console.log('a')
    )
    return (
        <tbody>
        <tr>
            {
                data.map(({name}, idx) => (
                    <S.TableBodyRowContainer key={idx}>
                        <td>{name}</td>
                        <td>
                            <CustomButton bg onclick={handleEdit}>
                                <S.Icon color='green' className='fas fa-edit'/>
                            </CustomButton>

                        </td>
                        <td>
                            <CustomButton bg onclick={handleDelete}>
                                <S.Icon color='red' className="fas fa-trash"/>
                            </CustomButton>
                        </td>
                    </S.TableBodyRowContainer>
                ))
            }
        </tr>
        </tbody>
    )
}


export default TableBody

TableBody.propTypes={
    data:PropTypes.array.isRequired
}