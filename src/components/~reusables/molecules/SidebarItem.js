import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { small_space, medium_space_2 } from "../variables/spacing";
import { primary, text } from "../variables/colors";
import { body_1 } from "../variables/font-sizes";

const SideNavItem = ({ icon, text, path, isDark }) => {
  return (
    <StyledNavItem isDark={isDark}>
      <NavLink to={path} activeClassName="active-nav">
        <i className="material-icons">{icon}</i>
      </NavLink>
      <NavLink to={path} activeClassName="active-nav">
        <span>{text}</span>
      </NavLink>
    </StyledNavItem>
  );
};

const StyledNavItem = styled.div`
  font-size: ${body_1};
  padding: 0 ${small_space};

  a {
    color: ${text};
    text-decoration: none;
  }

  display: flex;
  align-items: center;

  i {
    margin-right: ${small_space};
    vertical-align: middle;
    font-size: 28px;
  }

  

  .active-nav {
    color: ${primary};
    font-weight: 500;
  }

  margin-bottom: ${medium_space_2};
`;

export default SideNavItem;
