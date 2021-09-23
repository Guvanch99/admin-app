import {useSelector} from "react-redux";

import {CustomTable} from "../../components";

const Products =()=>{
    const {products}=useSelector(state=>state.crud)
    console.log(products)
    return(
     <CustomTable data={products}/>
    )
}

export default Products
