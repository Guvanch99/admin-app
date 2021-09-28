import {useEffect, useState} from "react";
import {useLocation, useHistory} from "react-router-dom";

import {CustomButton, CustomInput, ModalPreview, Spinner, Portal, ModalSuccess, PageBack} from "../../components";

import {updateSingleData} from "../../redux/crudSlice";

import {isObjectEmpty, isObjectValueEmpty} from "../../utils";

import {getSingleData} from "../../services/getSingleData";

import * as S from './styled'
import {ROUTER_DATA_EDIT} from "../../constants/routers";

const DataEdit = () => {
    const location = useLocation()
    const history = useHistory()
    const [isModalPreview, setIsModalPreview] = useState(false)
    const [isModalSuccess, setIsModalSuccess] = useState(false)
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
        setIsModalSuccess(true)
    }
    const toggleModalPreview = () => setIsModalPreview(!isModalPreview)

    const closeModalSuccess = () => {
        setIsModalSuccess(false)
        history.push(ROUTER_DATA_EDIT)
    }

    const Inputs = Object.keys(singleData).map((key, idx) =>
        <CustomInput key={idx} bg='orangeColor' label={key} disabled={key === 'id'}
                     type='text' autoComplete='off'
                     name={key}
                     value={singleData[key]} placeholder={`Enter a ${singleData[key]}`} onChange={handleChange}/>
    )

    return (
        <>
            {isModalPreview ?
                <Portal component={ModalPreview} nameOfClass='modal-preview' toggleModalPreview={toggleModalPreview}
                        data={singleData}/> : null}
            {isModalSuccess ?
                <Portal component={ModalSuccess} nameOfClass='modal-success' closeModalSuccess={closeModalSuccess}
                        data={singleData}/> : null}
            <PageBack/>
            {isEmpty ? <Spinner/> :
                <S.FormEdit>
                    <S.EditMenuText>Edit Menu</S.EditMenuText>
                    {Inputs}
                    <S.ButtonContainer isPreview={singleData.src}>
                        <CustomButton onclick={updateData} disabled={isObjectValueEmpty(singleData)} name='Submit'
                                      type='submit'/>
                        {singleData.src ? <CustomButton bg onclick={toggleModalPreview} name='Preview'/> : null}
                    </S.ButtonContainer>
                </S.FormEdit>

            }
        </>
    )
}

export default DataEdit
