import {useEffect, useState} from "react";
import {useLocation, useHistory} from "react-router-dom";

import {CustomButton, CustomInput, ModalPreview, Portal, ModalSuccess, PageBack} from "../../../components";

import {updateSingleData} from "../../../redux/crudSlice";

import { isObjectValueEmpty} from "../../../utils";

import {getSingleData} from "../../../services/getSingleData";

import {ROUTER_DATA_EDIT} from "../../../constants/routers";
import {REGEX_NUMBER} from "../../../constants/regex";

import {ErrorGlobal} from "../styled";

import * as S from '../styled'

const DataEdit = () => {
    const location = useLocation()
    const history = useHistory()

    const [error, setError] = useState(false)
    const [isModalPreview, setIsModalPreview] = useState(false)
    const [isModalSuccess, setIsModalSuccess] = useState(false)
    const [singleData, setSingleData] = useState({})

    const {props: {id, url}} = location

    useEffect(() => {
        getSingleData({id, url}).then(({data}) => setSingleData(data))
    }, [id, url])

    const handleChange = ({target: {name, value}}) => {
        setSingleData({...singleData, [name]: value})
        setError(false)
    }
    const updateData = (e) => {
        e.preventDefault()
        if (REGEX_NUMBER.test(singleData.price)) {
            updateSingleData(id, url, singleData)
            setIsModalSuccess(true)
        } else
            setError(true)
    }

    const toggleModalPreview = () => setIsModalPreview(!isModalPreview)

    const closeModalSuccess = () => {
        setIsModalSuccess(false)
        history.push(ROUTER_DATA_EDIT)
    }

    const Inputs = Object.keys(singleData).map((key, idx) =>
        <CustomInput key={idx} bg='orangeColor'
                     label={key}
                     disabled={key === 'id'}
                     type='text' autoComplete='off'
                     name={key}
                     value={singleData[key]}
                     placeholder={`Enter a ${key}`}
                     onChange={handleChange}/>
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
            <S.FormEdit>
                <S.EditMenuText>Edit Menu</S.EditMenuText>
                {error ? <ErrorGlobal>Price must be Number</ErrorGlobal> : null}
                {Inputs}
                <S.ButtonContainer isPreview={singleData.src}>
                    <CustomButton onclick={updateData} disabled={isObjectValueEmpty(singleData)} name='Submit'
                                  type='submit'/>
                    {singleData.src ? <CustomButton bg onclick={toggleModalPreview} name='Preview'/> : null}
                </S.ButtonContainer>
            </S.FormEdit>
        </>
    )
}

export default DataEdit
