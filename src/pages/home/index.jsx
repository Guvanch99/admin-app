import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {MainNavigation, Spinner} from "../../components"

import {getData} from "../../redux/crudSlice"
import {Error} from "../"

import * as S from "./styled";

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    const {status, error} = useSelector(state => state.crud)
    return (
        <S.Container>
            {status ? <Spinner/> : <MainNavigation/>}
            {error ? <Error/> : null}
        </S.Container>
    )
}

export default Home
