import styled from "styled-components";

import {handleColorType} from "../../styles/functions.styled";
import {flexJustifySpaceAround} from "../../styles/flex.styled";

export const Icon = styled.i`
  color: ${({color}) => handleColorType(color)};
  font-size: 1.4rem;
`

export const TableBodyRowContainer = styled.tr`
  ${flexJustifySpaceAround};
  
  &:nth-child(even) {
    background: ${({theme}) => theme.colors.plantColor};
  }
`
export const TableBodyTD=styled.td`
  margin: .5rem 2rem;
  
`