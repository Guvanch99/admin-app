import styled from "styled-components";
import {flex} from "../../styles/flex.styled";

export const ModalWrapper = styled.div`
  ${flex};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  margin: 2rem;

`
export const ModalPreview = styled.div`
  flex-direction: column;
  color: ${({theme}) => theme.colors.secondaryColor};
  background: ${({theme}) => theme.colors.whiteColor};
  padding: 2rem;
  margin: 1rem 3rem;
  border-radius: 10px;
  position: absolute;
  z-index: 99999;
`
export const Image = styled.img`
display: block;
`
