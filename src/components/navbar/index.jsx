import {memo} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import Button from "../button";

import {logOut} from "../../redux/adminSlice";

import {DATA} from '../../data'

import './index.scss'


const {navLinks} = DATA

const Navbar = () => {
    const dispatch=useDispatch()
    const logOutAdmin=()=>dispatch(logOut())
    return(
        <nav className='navbar'>
            <ul className='menu'>
                {
                    navLinks.map(({name, url}, idx) => (
                        <li className='menu__list' key={idx}><NavLink to={url}>{name}</NavLink></li>
                    ))
                }
                <li><Button customStyle type='button' onclick={logOutAdmin} name='logOut'/></li>
            </ul>
        </nav>
    )
}



export default memo(Navbar)