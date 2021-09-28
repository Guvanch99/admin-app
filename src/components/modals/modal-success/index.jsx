import {memo} from "react";
import PropTypes from "prop-types";

import {CustomButton} from "../../index";

import * as S from '../styled'

const ModalSuccess=({closeModalSuccess})=>{

    return(
        <S.ModalWrapper>
            <S.Modal onClick={closeModalSuccess}>
                <S.ModalSuccessLabel>Success</S.ModalSuccessLabel>
                <S.Icon className="far fa-check-circle" />
                <CustomButton onclick={closeModalSuccess} name='Close' />
            </S.Modal>
        </S.ModalWrapper>
    )
}

export default memo(ModalSuccess)

ModalSuccess.propTypes={
    closeModalSuccess:PropTypes.func.isRequired
}
