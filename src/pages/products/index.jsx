import {useSelector} from "react-redux";

import {CustomTable, PageBack} from "../../components";

import {ROUTER_DATA_ADD} from "../../constants/routers";

import * as S from "./styled"

const Products = () => {
    const {products} = useSelector(state => state.crud)

    return (
        <div>
            <PageBack/>
            <S.AddLink to={ROUTER_DATA_ADD}>
                Add Products
            </S.AddLink>
            <CustomTable data={products}/>
        </div>
    )
}

export default Products
