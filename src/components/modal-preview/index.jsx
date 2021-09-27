import {CustomButton} from "../index";

import * as S from './styled'



const ModalPreview=({data,toggleModal})=> {
    console.log(data.src)

    return (
        <S.ModalWrapper className='modalPromo-wrapper'>
            <S.ModalPreview className='modalPromo' onClick={toggleModal}>
              <S.Image src={data.src} alt={data.name}/>

                <CustomButton type='button' onclick={toggleModal} name='Close' />
            </S.ModalPreview>
        </S.ModalWrapper>
    )
}
export default ModalPreview