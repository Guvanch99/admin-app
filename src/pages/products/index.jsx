import {useSelector} from "react-redux";

import './index.styled'

const Products =()=>{
    const {products}=useSelector(state=>state.crud)
    console.log(products)
    return(
     <h1>Hello</h1>
    )
}

export default Products
