import styled from "styled-components";

import {grid} from "../../styles/mixin.styled";

export const Icon = styled.i`
  color: ${({color, theme}) => color === 'green' ? theme.colors.greenSuccessColor : theme.colors.lighterRedColor};
  font-size: 1.4rem;
`

export const TableBodyRowContainer = styled.div`
  ${grid({justify:'space-around',align:'center'})};
 grid-template-columns: repeat(3,1fr);
  
`