import styled from "styled-components";

export const Button=styled.button`
    color: ${({theme})=>theme.colors.whiteColor};
    background:  ${({theme})=>theme.colors.greenSuccessColor};
    font-size: 2em;
    padding: .2rem 2rem;
    border: none;
    cursor: pointer;

    &:disabled {
      color: ${({theme})=>theme.colors.whiteColor};
      background:  ${({theme})=>theme.colors.lighterRedColor};
      cursor: auto;
    }
`