import styled from "styled-components";

import {flexJustifySpaceAround} from "../../styles/flex.styled";

export const TReaderRow = styled.tr`
  ${flexJustifySpaceAround};
  background: ${({theme}) => theme.colors.blueColor};
`

export const THeadRowHeader = styled.th`
  margin: .5rem 2rem;
`
