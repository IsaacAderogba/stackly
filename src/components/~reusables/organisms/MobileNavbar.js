import React from "react";
import styled from "styled-components";
import { tablet_max_width } from "../variables/media-queries";
// import MobileNavItem from "./MobileNavItem";
import { small_space } from "../variables/spacing";
import { background, alt_background, lightgrey } from "../variables/colors";

const MobileNavbar = ({ user, icons, texts }) => {
  let isDark = null;
  if (user) {
    isDark = user.length > 0 ? user[0].isDark : null;
  }

  return (
    <StyledMN isDark={isDark}>
      hi
      {/* <MobileNavItem icon={icons.search} text={texts.search} path="/discover" />
      <MobileNavItem icon={icons.match} text={texts.match} path="/match" />
      <MobileNavItem
        icon={icons.settings}
        text={texts.settings}
        path="/profile"
      /> */}
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
