import {useSelector} from "react-redux";
import {CustomTable, PageBack} from "../../components";

import * as S from "./styled"

const Gallery = () => {
    const {gallery} = useSelector(state => state.crud)
    console.log(gallery)
    return (
        <div>
            <PageBack/>
            <CustomTable data={gallery}/>
        </div>
    )
}

export default Gallery