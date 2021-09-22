import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  background: rgba(80, 227, 194, .25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, .37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, .18);
`
export const AuthText = styled.h1`
  margin-bottom: 3rem;
  font-size: 4em;
  color: ${({theme})=>theme.colors.whiteColor};
`
export const Error = styled.h1`

  font-size: 2em;
  color: ${({theme}) => theme.colors.lighterRedColor};
  text-align: center;
  margin: 1rem 0;
`
