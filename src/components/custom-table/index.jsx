import {useRef} from "react";
import PropTypes from "prop-types"

import {CustomButton, TableBody, TableHeader} from "../index"

import * as S from "./styled"

const CustomTable = ({data, deleteHandler}) => {
    const refTable = useRef(null)
    const createExcel = () => {
        let csv = [];
        let rows = refTable.current.querySelectorAll("tr");

        for (let i = 0; i < rows.length; i++) {
            let row = [], cols = rows[i].querySelectorAll("td, th");

            for (let j = 0; j < 2; j++) {
                row.push(cols[j].innerText);
            }

            csv.push(row.join(","));
        }

        let csv_string = csv.join("\n");
        let csv_blob = new Blob([csv_string], {type: "text/csv"});
        let csv_href = window.URL.createObjectURL(csv_blob);

        let link = document.createElement('a');
        link.href = csv_href;
        link.download = `${data[0].substring(1)}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <S.CustomTableContainer>
            <CustomButton onclick={createExcel}>Download Excel</CustomButton>
            <S.Table ref={refTable}>
                <TableHeader url={data[0]}/>
                <TableBody data={data} deleteHandler={deleteHandler}/>
            </S.Table>
        </S.CustomTableContainer>
    )
}


export default CustomTable

CustomTable.propTypes = {
    data: PropTypes.array.isRequired
}