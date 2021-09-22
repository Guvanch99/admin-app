import {memo} from "react";
import {useDispatch} from "react-redux";

import {logOut} from "../../redux/adminSlice";

import {DATA} from '../../data'

import {Menu, List, Link} from "./index.styled";

const {navLinks} = DATA

const MainNavigation = () => {
    const dispatch = useDispatch()
    const logOutAdmin = () => dispatch(logOut())

    return (
        <Menu>
            {
                navLinks.map(({name, url, color}, idx) => (
                    <List style={{background: color}} key={idx}><Link onClick={idx === 3 ? logOutAdmin : null} to={url}>{name}</Link></List>
                ))
            }
        </Menu>
    )
}


export default memo(MainNavigation)
