import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import '../index.css';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
  const StyledNavigation = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    & a {
      display: inline-block;
      border: 1px solid #555;
      text-decoration: none;
      margin: 2% 5%;
      padding: 2% 5%;
      color: #444;
      border-radius: 10px;
      &:active {
        background: #555;
        color: white;
      }
    }
  `

  return (
    <StyledNavigation>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/episodes">Episodes</NavLink>
    </StyledNavigation>
  )
};
