import styled from "styled-components";

export const flex = ({justify, align}) => `
display:flex;
justify-content:${justify || "normal"};
align-items:${align || "normal"};
`;

export const ChartContainer = styled.div`
  width: 100vw;
  height: 100vh;
  ${flex({justify: 'flex-start', align: 'center'})};
  flex-direction: column;
`

export const ChartLabel = styled.h1`
  font-size: 2em;
  text-align: center;
`

export const ColorBox = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${({color}) => color};
  margin: 0 1rem;
`

export const InfoContainer = styled.div`
  width: 30vw;
  ${flex({justify: 'space-around', align: 'center'})};
  margin: 2rem 0;
`
export const Info = styled.div`
  ${flex({justify: 'center', align: 'center'})};
  flex-direction: column;
`

export const InfoBox = styled.div`
  ${flex({justify: 'center', align: 'center'})};
`

export const InfoLabel = styled.h1`
  opacity: .6;
`

export const LeftRound = styled.div`
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  background: #C2C8D6;
  margin: 0 .4rem;
`

export const RightRound = styled.div`
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  margin: 0 .4rem;
  background: linear-gradient(90deg, #46C379 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(90deg, #000084 66%, brown 66%);
`

export const SVG = styled.svg`
  background: white;
  width: 32rem;
  height: 32rem;
  margin-left: 7rem;

`
export const ChartNumber = styled.text`
  font-size: .4em;
  text-align: center;
  transform: translate(-2em, -0.8em);
`

export const ChartLabelT = styled.text`
  font-size: 0.2em;
  text-transform: uppercase;
  transform: translate(-3.4em, 0);
  color: #F0F0F0;
  opacity: .4;

`