import styled from "styled-components";

import {grid} from "../../styles/mixin.styled";

export const THeaderRow = styled.tr`

  ${grid({justify: 'space-around', align: 'normal'})};
  grid-template-columns: repeat(5, 1fr);
  background: ${({theme}) => theme.colors.blueColor};
  padding: 0.4rem;

`
export const THeadRowHeader = styled.th`
  
  &:nth-child(1) {
    margin-left: -.6rem;
  }

  &:nth-child(3) {
    margin-left: 1.6rem;
  }

`