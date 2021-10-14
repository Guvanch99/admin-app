import styled from "styled-components";

import {flex} from "../../stories/styled";

export const Select = styled.select`
  width: 10rem;
`

export const OrdersList = styled.ul`
  color: ${({theme}) => theme.colors.whiteColor};
  margin-top: 2rem;
`

export const Order = styled.li`
  margin: .6rem;
`

export const UserName = styled.h1`
  font-size: 1.6em;
`

export const TotalAmount = styled.h2`
  font-size: 1.4em;
`

export const InfoContainer = styled.div`
  ${flex({justify: 'space-around', align: 'center'})};
`

export const Tag=styled.div`

`