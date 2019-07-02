import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { signOut } from "../../../store/actions/authActions";
import {
  medium_space_3,
  large_space,
  medium_space_1
} from "../../~reusables/variables/spacing";
import { tablet_max_width } from "../../~reusables/variables/media-queries";
import { secondary, alt_secondary } from "../../~reusables/variables/colors";
import { heading_2 } from "../../~reusables/variables/font-sizes";
import { ButtonTertiary, ButtonPrimary } from "../../~reusables/atoms/Buttons";

const SkillsHeader = props => {
  const { user, signOut } = props;

  let isDark = null;
  if (user) {
    isDark = user.length > 0 ? user[0].isDark : null;
    if (user.length > 0) {
      console.log(user[0].isDark);
    }
  }

  console.log(user, isDark);

  return (
    <StyledHeader isDark={isDark}>
      <h2>Skills</h2>
      <div className="actions">
        <div>
          <ButtonPrimary className="first-button" isDark={isDark} width="40px">
            <i className="material-icons">add</i>
          </ButtonPrimary>
          <ButtonTertiary isDark={isDark} width="40px">
            <i className="material-icons">filter_list</i>
          </ButtonTertiary>
        </div>
        <div>
          <ButtonTertiary isDark={isDark} width="40px">
            <i className="material-icons">screen_share</i>
          </ButtonTertiary>
          <ButtonPrimary className="last-button" isDark={isDark} width="40px">
            <i className="material-icons">create_new_folder</i>
          </ButtonPrimary>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  flex-basis: 200px;
  padding: 0 ${medium_space_3};

  h2 {
    margin-top: ${large_space};
    font-size: ${heading_2};
    color: ${props => (props.isDark ? secondary : alt_secondary)};
  }

  .actions {
    display: flex;
    justify-content: space-between;
  }

  .first-button {
    margin-right: ${medium_space_1};
  }

  .last-button {
    margin-left: ${medium_space_1};
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    h2 {
      display: none;
    }
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  firestoreConnect()
)(SkillsHeader);
