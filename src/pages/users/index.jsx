import {useSelector} from "react-redux";
import {CustomTable, PageBack} from "../../components";

import * as S from "./styled"

const Users = () => {
    const {users} = useSelector(state => state.crud)
    return (
        <div>
            <PageBack/>
            <CustomTable data={users}/>
        </div>
    )
}
export default Users
