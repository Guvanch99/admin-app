import {memo,useEffect} from "react";
import {useHistory} from "react-router-dom";

import {ROUTER_HOME} from "../../constants/routers";

import './index.scss'


const Error=()=>{
    const history=useHistory()
    useEffect(()=>{
        setTimeout(()=>{
            history.push(ROUTER_HOME)
        },2000)
    },[])
    return(
        <h1 className='error-text'>Oops something get wrong</h1>
    )
}

export default memo(Error)