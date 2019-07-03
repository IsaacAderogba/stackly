import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { signOut } from "../../../store/actions/authActions";
import {
  filterSkills,
  deselectFilter
} from "../../../store/actions/skillActions";

import {
  medium_space_3,
  large_space,
  medium_space_1,
  small_space
} from "../../~reusables/variables/spacing";
import { tablet_max_width } from "../../~reusables/variables/media-queries";
import { secondary, alt_secondary } from "../../~reusables/variables/colors";
import { heading_2 } from "../../~reusables/variables/font-sizes";
import {
  ButtonTertiary,
  ButtonPrimary,
  ButtonSecondary
} from "../../~reusables/atoms/Buttons";

const SkillsHeader = props => {
  const { user, setSkillsModal, setProjectModal, skills, filterState } = props;

  let isDark = null;
  if (user) {
    isDark = user.length > 0 ? user[0].isDark : null;
  }

  return (
    <StyledHeader isDark={isDark}>
      <h2>Skills</h2>
      <div className="actions">
        <div>
          <ButtonPrimary
            onClick={() => setSkillsModal(true)}
            className="first-button"
            isDark={isDark}
            width="40px"
          >
            <i className="material-icons">add</i>
          </ButtonPrimary>
          {filterState ? (
            <ButtonSecondary
              onClick={props.deselectFilter}
              isDark={isDark}
              width="40px"
            >
              <i className="material-icons">filter_list</i>
            </ButtonSecondary>
          ) : (
            <ButtonTertiary
              onClick={() => props.filterSkills(skills)}
              isDark={isDark}
              width="40px"
            >
              <i className="material-icons">filter_list</i>
            </ButtonTertiary>
          )}
        </div>
        <div>
          <Link target="_blank" to={`profile/${user[0].id}`}>
            <ButtonTertiary isDark={isDark} width="40px">
              <i className="material-icons">send</i>
            </ButtonTertiary>
          </Link>
          <ButtonPrimary
            onClick={() => setProjectModal(true)}
            className="last-button"
            isDark={isDark}
            width="40px"
          >
            <i className="material-icons">note_add</i>
          </ButtonPrimary>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  flex-basis: 200px;
  padding: 0 ${medium_space_3};

  a {
    text-decoration: none;
    color: ;
  }

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
    margin-top: ${medium_space_1};
    padding: 0 ${small_space};
    flex-basis: 60px;

    h2 {
      display: none;
    }
  }
`;

const mapStateToProps = state => {
  return {
    filterState: state.skills.filterState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    filterSkills: skills => dispatch(filterSkills(skills)),
    deselectFilter: () => dispatch(deselectFilter())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect()
)(SkillsHeader);
