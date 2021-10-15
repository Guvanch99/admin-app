import styled from "styled-components";

import {flex} from "../../stories/styled";


export const Tag = styled.div`

`

export const Filter = styled.div`

`

export const FilterDivider = styled.div`
  width: 50vw;
  ${flex({justify: 'space-around', align: 'center'})};
  flex-wrap: wrap;
`

export const ButtonFilter = styled.button`
  ${flex({justify: 'space-evenly', align: 'center'})};
  background: ${({bg, theme}) => bg ? theme.colors.secondaryColor : theme.colors.whiteColor};
  color: ${({bg, theme}) => bg ? theme.colors.whiteColor : theme.colors.secondaryColor};
  width: 5.5rem;
  height: 3rem;
  padding: .4rem;
  border: none;
  border-radius: 10%;
  font-weight: bolder;
`

export const FilterOptionContainer = styled.div`
  margin-top: .1rem;
  opacity: ${({isVisible}) => isVisible ? 1 : 0};
  ${flex({justify: 'space-evenly', align: 'center'})};
  flex-direction: column;
  border: 2px solid ${({theme}) => theme.colors.blueColor};
  color: ${({theme})=>theme.colors.whiteColor};
  height: 20rem;
  width: 20rem;
  border-radius: 3%;
  transition: opacity .4s ease-in;
`

export const FilterInfoContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RadioContainer = styled.div`
  width: 18rem;
  height: 2rem;
  ${flex({justify: 'flex-start', align: 'center'})};
`

export const Label = styled.label`
  font-size: 1rem;
  margin-left: .4rem;
`

export const HorizontalLine = styled.hr`
  margin-top: .2rem;
  color: ${({theme}) => theme.colors.lighterBlackColor};
`

export const Icon = styled.i`
  font-size: 1em;
`

export const OrdersList = styled.ul`
  color: ${({theme}) => theme.colors.whiteColor};
  margin-top: 2rem;
`


export const UserName = styled.h1`
  color:${({orange,theme})=>orange?theme.colors.orangeColor:theme.colors.whiteColor};
  font-size: 1.6em;
`

export const TotalAmount = styled.h2`
  color:${({orange,theme})=>orange?theme.colors.orangeColor:theme.colors.whiteColor};
  font-size: 1.4em;
`

export const InfoContainer = styled.div`
  ${flex({justify: 'space-around', align: 'start'})};
  width: 10rem;
  margin: .4rem;
`
