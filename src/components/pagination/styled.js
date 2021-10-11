import styled from "styled-components";

import {flexCenter} from "../../styles/flex.styled";

export const PaginationContainer = styled.div`
  ${flexCenter};
`

export const PageButtons = styled.button`
  width: 3rem;
  margin: .4rem;
  padding: .4rem;
  border-radius: 10%;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${({theme}) => theme.colors.blueColor};
    color: ${({theme}) => theme.colors.whiteColor};
  }
`


