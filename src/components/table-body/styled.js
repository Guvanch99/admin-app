import styled from "styled-components";

import {grid} from "../../styles/mixin.styled";

import {handleColorType} from "../../styles/functions.styled";

export const Icon = styled.i`
  color: ${({ color }) => handleColorType(color)};
  font-size: 1.4rem;
`

export const TableBodyRowContainer = styled.div`
  ${grid({justify: 'center', align: 'center'})};
  grid-template-columns: repeat(5, 1fr);

  &:nth-child(even) {
    background: ${({theme}) => theme.colors.plantColor};
  }
`
