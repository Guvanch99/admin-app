import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Menu = styled.ul`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(25rem, 1fr));
  justify-items: center;
  align-items: center;
  grid-gap: 2rem;
`

export const List = styled.li`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 12rem;
  height: 12rem;
  margin: 1rem;
  border-radius: 5%;
  box-shadow: 7px 15px 20px 2px rgba(${({theme}) => theme.colors.secondaryColor}, .62);
  -webkit-box-shadow: 7px 15px 20px 2px rgba(${({theme}) => theme.colors.secondaryColor}, .62);
  -moz-box-shadow: 7px 15px 20px 2px rgba(${({theme}) => theme.colors.secondaryColor}, .62);
`
export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  color: ${({theme}) => theme.colors.whiteColor};
  background: ${({bg})=>console.log(bg)};
  font-size: 1.8em;
`



