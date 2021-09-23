import styled, {css} from "styled-components"
import {grid} from "../../styles/mixin.styled";

const baseStyle = css`
  background: transparent;
  border: none;
  margin: 0 1rem;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.colors.blueColor};
    transform: scale(1.02);
  }
;
`
export const Button = styled.button`
  color: ${({theme}) => theme.colors.mainColor};
  position: fixed;
  ${baseStyle};

  @media (max-width: ${({theme}) => theme.netbook} ){
    display: grid;
    position: static;
    margin: 2rem auto;
  };
`
export const Icon = styled.i`
  ${baseStyle};
  margin-right: 1rem;
`