import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {CustomTable, PageBack, Spinner} from "../../components";

import {getUsers} from "../../redux/crudSlice";

import * as S from "./styled"

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage))
    }, [currentPage])

    const {users} = useSelector(state => state.crud)

    return (
        <>
            {
                users.length > 0 ? (
                    <div>
                        <PageBack/>
                        <CustomTable data={users} setCurrentPage={setCurrentPage}/>
                    </div>
                ) : <Spinner/>
            }
        </>

    )
}
export default Users
