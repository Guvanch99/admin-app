import styled, {css} from "styled-components";
import {grid} from "../../styles/mixin.styled";
import {flex} from "../../styles/flex.styled";

export const FormEdit = styled.form`
  display: grid;
  justify-items: center;
  align-items: center;

`

export const EditMenuText = styled.h1`
  font-size: 4em;
  color: ${({theme}) => theme.colors.mainColor};
  margin: 2rem auto;

`
export const ButtonContainer = styled.div`
  ${({isPreview}) => {
    if (isPreview) {
      css`
        ${grid({justify: 'space-around', align: 'center'})};
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
      `
    }
  }
  }
`