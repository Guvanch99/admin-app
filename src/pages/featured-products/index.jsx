import {useSelector} from "react-redux"
import {CustomTable, PageBack} from "../../components"

import * as S from "./styled"



const FeaturedProducts = () => {
    const {featuredProducts} = useSelector(state => state.crud)
    return (
        <>
            <PageBack/>
            <CustomTable data={featuredProducts}/>
        </>
    )
}

export default FeaturedProducts