import styled, {keyframes} from "styled-components";


const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const Loader = styled.div`
  border: 16px solid ${({theme}) => theme.colors.lighterGrayColor};
  border-top: 16px solid ${({theme}) => theme.colors.blueColor}; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${Spin} 2s linear infinite;
`