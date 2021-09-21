import {memo} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import {logOut} from "../../redux/adminSlice";

import {DATA} from '../../data'

import './index.scss'


const {navLinks} = DATA

const MainNavigation = () => {
    const dispatch=useDispatch()
    const logOutAdmin=()=>dispatch(logOut())
    return(
        <nav className='navigation'>
            <ul className='menu'>
                {
                    navLinks.map(({name, url}, idx) => (
                        <li className='menu__list' key={idx}><NavLink className='menu__list-link' onClick={idx===3?logOutAdmin:null} to={url}>{name}</NavLink></li>
                    ))
                }
            </ul>
        </nav>
    )
}



export default memo(MainNavigation)
