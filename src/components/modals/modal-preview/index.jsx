import {memo} from 'react'
import PropTypes from "prop-types";

import {CustomButton} from "../../index";

import * as S from '../styled'


const ModalPreview = ({data, toggleModalPreview}) => {
    const objectLength = Object.keys(data).length
    const {name, src, price, description} = data

    return (
        <S.ModalWrapper>
            <S.Modal onClick={toggleModalPreview}>
                <S.FlexContainer>
                    <S.Image src={src} alt={name}/>
                    {objectLength > 3 ? (
                        <S.ModalPreviewInfo>
                            <S.ModalPreviewName>Name: {name}</S.ModalPreviewName>
                            <S.ModalPreviewPrice>Price: {price} rub </S.ModalPreviewPrice>
                            <S.ModalPreviewDescription>Description: {description}</S.ModalPreviewDescription>
                        </S.ModalPreviewInfo>
                    ) : null}
                </S.FlexContainer>
                <CustomButton onclick={toggleModalPreview} name='Close'/>
            </S.Modal>

        </S.ModalWrapper>
    )
}
export default memo(ModalPreview)

ModalPreview.propTypes = {
    data: PropTypes.object,
    toggleModalPreview: PropTypes.func.isRequired
}
