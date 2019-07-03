import React from "react";
import styled from "styled-components";
import { tablet_max_width } from "../variables/media-queries";
// import MobileNavItem from "./MobileNavItem";
import { small_space } from "../variables/spacing";
import { background, alt_background, lightgrey } from "../variables/colors";
import MobileNavItem from "../molecules/MobileNavItem";

const MobileNavbar = ({ user }) => {
  let isDark = null;
  if (user) {
    isDark = user.length > 0 ? user[0].isDark : null;
  }

  return (
    <StyledMN isDark={isDark}>
      <MobileNavItem isDark={isDark} icon="list" text="Skills" path="/skills" />
      <MobileNavItem
        isDark={isDark}
        icon="person_outline"
        text="Profile"
        path="/profile"
      />
    </StyledMN>
  );
};

const StyledMN = styled.nav`
  display: none;

  @media only screen and (max-width: ${tablet_max_width}) {
    background-color: ${props => (props.isDark ? background : alt_background)};
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding-bottom: ${small_space};
    border-top: 1px solid ${lightgrey};
    box-shadow: 0px -1px 5px rgba(151, 162, 185, 0.1),
      0px -3px 4px rgba(151, 162, 185, 0.06),
      0px -2px 4px rgba(151, 162, 185, 0.07);

    bottom: 0;
    position: fixed;
  }
`;

export default MobileNavbar;
