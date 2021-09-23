import styled from "styled-components";

import {grid} from "../../styles/mixin.styled";

export const THeaderRow=styled.tr`
  width: 100vw;
  ${grid({justify:'space-around',align:'normal'})};
  grid-template-columns: repeat(3,1fr);
  background: ${({theme})=>theme.colors.blueColor};
  padding: .4rem;
  
`
export const THeadRowHeader=styled.th`
padding-left:  2rem;
`