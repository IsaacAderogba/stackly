import React from "react";
import styled from "styled-components";
import {
  medium_space_3,
  large_space
} from "../../~reusables/variables/spacing";
import { tablet_max_width } from "../../~reusables/variables/media-queries";
import { secondary, alt_secondary } from "../../~reusables/variables/colors";
import { heading_2 } from "../../~reusables/variables/font-sizes";
import { ButtonSecondary, ButtonTertiary } from "../../~reusables/atoms/Buttons";

const ProfileHeader = user => {
  let isDark = null;
  if (user) {
    isDark = user.length > 0 ? user[0].isDark : null;
  }

  return (
    <StyledHeader isDark={isDark}>
      {/* Needs a conditional checking for company or candidate */}
      <h2>Profile</h2>
      <div className="actions">
        <ButtonSecondary isDark={isDark}>Edit Profile</ButtonSecondary>
        <ButtonTertiary isDark={isDark}>Log Out</ButtonTertiary>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  flex-basis: 200px;
  border: 1px solid red;
  padding: 0 ${medium_space_3};

  h2 {
    border: 1px solid red;
    margin-top: ${large_space};
    font-size: ${heading_2};
    color: ${props => (props.isDark ? secondary : alt_secondary)};
  }

  .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    display: none;
  }
`;

export default ProfileHeader;
