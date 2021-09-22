import {memo, useEffect} from "react";
import {useHistory} from "react-router-dom";

import {ROUTER_HOME} from "../../constants/routers";

import {ErrorText} from './index.styled'


const Error = () => {
    const history = useHistory()
    useEffect(() => {
        setTimeout(() => {
            history.push(ROUTER_HOME)
        }, 2000)
    }, [])
    return (
        <ErrorText>Oops something get wrong</ErrorText>
    )
}

export default memo(Error)