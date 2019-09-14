import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
  return (
    <>
      <NavLink to="./characters" className="navLink" activeClassName="activeNavLink">Characters</NavLink>
      <NavLink to="./locations" className="navLink" activeClassName="activeNavLink">Locations</NavLink>
      <NavLink to="./episodes" className="navLink" activeClassName="activeNavLink">Episodes</NavLink>
    </>
  )
};
