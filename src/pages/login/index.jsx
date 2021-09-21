import {useMemo, useState} from "react";
import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'

import {Input} from '../../components'

import {loginAdmin, adminError} from "../../redux/adminSlice";

import './index.scss'
import Button from "../../components/button";
import {ROUTER_HOME} from "../../constants/routers";
import {ADMIN_NAME, ADMIN_PASSWORD} from "../../constants/variables";
import {upperCaseString} from "../../utils";


const Login = () => {
    const [adminLogin, setAdminLogin] = useState({
        adminName: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        adminName: '',
        password: ''
    })
    const {adminName, password} = adminLogin

    const history = useHistory()
    const dispatch = useDispatch()
    const {adminNotFound} = useSelector(state => state.admin)
    const isButtonDisabled = !adminName || !password || errors.adminName || errors.password


    /* const validation = ({target:{name}},length,errorText) => (
         name.length<length&&
         setErrors({...errors, [name]: `${errorText} ${length}`})
     )*/

    const adminValidation = () => adminName.length < 4 ? setErrors({
        ...errors,
        adminName: "length must be more than 4"
    }) : null
    const passwordValidation = () => password.length < 6 ? setErrors({
        ...errors,
        password: "length must be more than 6"
    }) : null

    const LOGIN_DATA = useMemo(
        () => [
            {
                name: 'adminName',
                value: adminName,
                label: 'Admin Name',
                error: errors.adminName,
                type: 'text',
                functionValidation: adminValidation
            },
            {
                name: 'password',
                value: password,
                label: 'Password',
                error: errors.password,
                type: 'password',
                functionValidation: passwordValidation
            }
        ],
        [adminName, password, errors.adminName, errors.password]
    )

    const handleChange = event => {
        const {value, name} = event.target
        errors[name] && setErrors({...errors, [name]: ''})
        setAdminLogin({...adminLogin, [name]: value})
    }
    const login = (e) => {
        e.preventDefault()
        const adminNameUpperCase = upperCaseString(adminName)
        const passwordUpperCase = upperCaseString(password)
        console.log('adminNameUpperCase',adminNameUpperCase)
        console.log("passwordUpperCase",passwordUpperCase)
        if (adminNameUpperCase === ADMIN_NAME && passwordUpperCase === ADMIN_PASSWORD) {
            dispatch(loginAdmin())
            history.push(ROUTER_HOME)
        } else
            dispatch(adminError())
    }

    return (
        <div className='login'>
            <form className="login__form">
                <h1 className='login__form-auth'>Authorization</h1>
                {adminNotFound ? (
                    <h1 className="login__form-error">Invalid adminName or password</h1>
                ) : null}
                {LOGIN_DATA.map(
                    ({name, value, label, error, type, functionValidation}, index) => (
                        <Input
                            key={index}
                            name={name}
                            value={value}
                            label={label}
                            error={error}
                            type={type}
                            onChange={handleChange}
                            required={true}
                            handleBlur={functionValidation}
                        />
                    )
                )}
                <Button onclick={login} name='Submit' disabled={isButtonDisabled} type='submit'/>
            </form>
        </div>
    )
}

export default Login