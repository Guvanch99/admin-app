import {useEffect, useState} from "react";
import {useLocation, useHistory} from "react-router-dom";

import {CustomButton, CustomInput, ModalPreview, Spinner, Portal} from "../../components";

import {updateSingleData} from "../../redux/crudSlice";

import {isObjectEmpty, isObjectValueEmpty} from "../../utils";

import {getSingleData} from "../../services/getSingleData";

import * as S from './styled'

const DataEdit = () => {
    const location = useLocation()
    const history = useHistory()
    const [isModal, setIsModal] = useState(false)
    const [singleData, setSingleData] = useState({})

    const {props: {id, url}} = location

    useEffect(() => {
        getSingleData({id, url}).then(({data}) => setSingleData(data))
    }, [id, url])

    const isEmpty = isObjectEmpty(singleData)
    const handleChange = ({target: {name, value}}) => setSingleData({...singleData, [name]: value})
    const updateData = (e) => {
        e.preventDefault()
        updateSingleData(id, url, singleData)
        history.goBack()

    }
    const toggleModal = () => setIsModal(!isModal)

    const Inputs = Object.keys(singleData).map((key, idx) =>
        <CustomInput key={idx} bg='orangeColor' label={key} disabled={key === 'id'} type='text' autoComplete='off'
                     name={key}
                     value={singleData[key]} placeholder={`Enter a ${singleData[key]}`} onChange={handleChange}/>
    )

    return (
        <>
            {isModal ? <Portal component={ModalPreview} nameOfClass='modal-preview' toggleModal={toggleModal}
                               data={singleData}/> : null}
            {isEmpty ? <Spinner/> :
                <S.FormEdit>
                    <S.EditMenuText>Edit Menu</S.EditMenuText>
                    {Inputs}
                    <S.ButtonContainer isPreview={singleData.src}>
                        <CustomButton onclick={updateData} disabled={isObjectValueEmpty(singleData)} name='Submit'
                                      type='submit'/>
                        {singleData.src ?
                            <CustomButton bg onclick={toggleModal} disabled={isObjectValueEmpty(singleData)}
                                          name='Preview'
                                          type='button'/> : null}
                    </S.ButtonContainer>
                </S.FormEdit>

            }
        </>
    )
}
export default DataEdit