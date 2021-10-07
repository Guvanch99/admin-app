import styled from "styled-components";

export const CustomTableContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  &:first-child{
    margin-top: 0.2rem;
  }
`

export const Table = styled.table`
  max-width: 70rem;
  font-size: 2em;
  text-align: center;
  border-collapse: collapse;
  margin: 4rem auto;
  color: ${({theme}) => theme.colors.whiteColor};

`