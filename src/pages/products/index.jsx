import {useSelector} from "react-redux";

import {CustomTable, PageBack} from "../../components";

const Products = () => {
    const {products} = useSelector(state => state.crud)

    return (
        <div>
            <PageBack/>
            <CustomTable data={products}/>
        </div>
    )
}

export default Products
