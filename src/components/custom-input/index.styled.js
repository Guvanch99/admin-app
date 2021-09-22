import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;
  color: ${({theme}) => theme.colors.whiteColor};
`
export const Label = styled.label`
  font-size: 1.5em;
  margin-right: .4rem;
`

export const Input = styled.input`
  margin: .4rem 0;
  font-size: 1.6em;
  line-height: 1.4rem;
  border: none;
  border-bottom: 1px solid ${({layout, theme}) => layout ? theme.colors.lighterRedColor : theme.colors.lighterBlackColor};
  outline: none;
  width: 15rem;
  background: transparent;
  color: ${({theme}) => theme.colors.whiteColor};

  &:disabled {
    background-color: ${({theme}) => theme.colors.whiteColor};
  }

  &:focus {
    border-bottom: 1px solid ${({theme}) => theme.colors.mainColor};
  }
`

export const Error = styled.span`
  color: ${({theme}) => theme.colors.lighterRedColor};
  font-size: 1em;
  font-weight: bold;
`
