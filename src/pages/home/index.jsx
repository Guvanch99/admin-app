import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {MainNavigation} from "../../components";

import {getData} from "../../redux/crudSlice";

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    return (
        <MainNavigation/>
    )
}

export default Home
