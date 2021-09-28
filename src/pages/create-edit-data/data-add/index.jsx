import {useState} from "react";
import {useHistory} from "react-router-dom";

import {CustomButton, CustomInput, ModalPreview, ModalSuccess, PageBack, Portal} from "../../../components";

import {isObjectValueEmpty} from "../../../utils";

import {DB} from "../../../core/axios";

import {ALL_PRODUCTS} from "../../../constants/variables";

import {ROUTER_DATA_ADD} from "../../../constants/routers";

import {DATA} from "../../../data";

import * as S from '../styled'

const {selectOptionType} = DATA

const DataAdd = () => {
    const history = useHistory()

    const [addData, setAddData] = useState({
        name: '',
        src: '',
        description: '',
        price: ''
    })
    const [addDataType, setAddDataType] = useState('combo')
    const [isModalPreview, setIsModalPreview] = useState(false)
    const [isModalSuccess, setIsModalSuccess] = useState(false)

    const handleChange = ({target: {name, value}}) => setAddData({...addData, [name]: value})
    const handleChangeType = ({target: {value}}) => setAddDataType(value)
    const toggleModalPreview = () => setIsModalPreview(!isModalPreview)
    const closeModalSuccess = () => {
        setIsModalSuccess(false)
        history.push(ROUTER_DATA_ADD)
    }
    const createData = (e) => {
        e.preventDefault()

        const newData={...addData,price:Number(addData.price),addDataType}
        DB.post(ALL_PRODUCTS, newData).then(r => console.log(r)).catch(error => console.log(error))
    }

    const Inputs = Object.keys(addData).map((key, idx) =>
        <CustomInput key={idx} bg='orangeColor' label={key}
                     type='text' autoComplete='off'
                     name={key}
                     value={addData[key]} placeholder={`Enter a ${key}`} onChange={handleChange}/>
    )

    const Select = <S.Select onChange={handleChangeType} value={addDataType} name="sort">
        {selectOptionType.map((name, index) => (
            <option className="sort-form__option" key={index} value={name}>
                {name}
            </option>
        ))}
    </S.Select>

    return (
        <>
            {isModalPreview ?
                <Portal component={ModalPreview} nameOfClass='modal-preview' toggleModalPreview={toggleModalPreview}
                        data={addData}/> : null}
            {isModalSuccess ?
                <Portal component={ModalSuccess} nameOfClass='modal-success'
                        closeModalSuccess={closeModalSuccess}/> : null}
            <PageBack/>
            <S.FormEdit>
                <S.EditMenuText>Add Menu</S.EditMenuText>
                {Inputs}
                {Select}
                <S.ButtonContainer isPreview={addData.src}>
                    <CustomButton onclick={createData} disabled={isObjectValueEmpty(addData)} name='Submit' type='submit'/>
                    {addData.src ? <CustomButton bg onclick={toggleModalPreview} name='Preview'/> : null}
                </S.ButtonContainer>
            </S.FormEdit>
        </>
    )
}
export default DataAdd
