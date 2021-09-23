import styled from "styled-components";

import {grid} from "../../styles/mixin.styled";

export const THeaderRow = styled.tr`

  ${grid({justify: 'space-around', align: 'normal'})};
  grid-template-columns: repeat(4, 1fr);
  background: ${({theme}) => theme.colors.blueColor};
  padding: 0.4rem;
`
export const THeadRowHeader = styled.th`
  padding: 0 2rem;
`