import React, { useState } from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { updateProfile } from "../../../store/actions/userActions";
import { Input } from "../../~reusables/atoms/Inputs";
import darkTheme from "../../~reusables/assets/dark-theme.png";
import lightTheme from "../../~reusables/assets/light-theme.png";
import {
  medium_space_3,
  medium_space_1,
  small_space,
  extra_small_space
} from "../../~reusables/variables/spacing";
import {
  lightgrey,
  text,
  secondary,
  alt_secondary,
  background,
  primary
} from "../../~reusables/variables/colors";
import { body_1 } from "../../~reusables/variables/font-sizes";
import { ButtonPrimary, ButtonSecondary } from "../../~reusables/atoms/Buttons";
import { tablet_max_width } from "../../~reusables/variables/media-queries";

const ProfileBody = props => {
  const { user, updateProfile } = props;
  const [firstName, setFirstName] = useState(
    "firstName" in user[0] ? user[0].firstName : ""
  );
  const [lastName, setLastName] = useState(
    "lastName" in user[0] ? user[0].lastName : ""
  );
  const [editMode, setEditMode] = useState(false);
  let isDark = user[0].isDark;

  const onFirstNameChange = e => {
    setFirstName(e.target.value);
  };

  const onLastNameChange = e => {
    setLastName(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setEditMode(false);
    if (firstName && lastName) {
      updateProfile({ firstName, lastName, id: user[0].id });
    }
    // call correct action creator
  };

  return (
    <StyledBody isDark={isDark}>
      <form onSubmit={onFormSubmit}>
        {/* <div>
          <p className="label">Profile Photo</p>
          {!editMode ? <p className="divider">Profile Photo</p> : <Input />}
        </div> */}
        <div>
          <p className="label">First Name</p>
          {!editMode ? (
            <p className="divider" onClick={() => setEditMode(true)}>
              {firstName}
            </p>
          ) : (
            <Input
              required
              isDark={isDark}
              value={firstName}
              onChange={onFirstNameChange}
              placeholder="Your first name"
            />
          )}
        </div>
        <div>
          <p className="label">Last Name</p>
          {!editMode ? (
            <p className="divider" onClick={() => setEditMode(true)}>
              {lastName}
            </p>
          ) : (
            <Input
              required
              isDark={isDark}
              value={lastName}
              onChange={onLastNameChange}
              placeholder="Your first name"
            />
          )}
        </div>
        {editMode ? (
          <ButtonPrimary isDark={isDark}>Save Changes</ButtonPrimary>
        ) : (
          <ButtonSecondary isDark={isDark} onClick={() => setEditMode(true)}>
            Edit Profile
          </ButtonSecondary>
        )}
      </form>
      <section>
        <p className="label">Choose your theme</p>
        <div className="theme-options">
          <div className={`dark-theme ${isDark}`}>
            <img src={darkTheme} alt="" />
          </div>
          <div className={`light-theme ${!isDark}`}>
            <img src={lightTheme} alt="" />
          </div>
        </div>
      </section>
    </StyledBody>
  );
};

const mapStateToProps = state => {
  return {
    // user: state.firestore.ordered.user,
    // auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: profile => dispatch(updateProfile(profile))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect()
)(ProfileBody);

const StyledBody = styled.section`
  padding: 0 ${medium_space_3};
  display: flex;
  justify-content: space-between;

  section {
    width: 60%;
    flex-grow: 1;
    margin-left: ${small_space};

    .theme-options {
      display: flex;
      justify-content: space-between;

      .dark-theme,
      .light-theme {
        flex-basis: 200px;
        flex-grow: 1;
        max-width: 47%;
        border: 2px solid ${text};
        border-radius: 8px;
        cursor: pointer;

        img {
          width: 100%;
          border-radius: inherit;
          object-fit: cover;
        }
      }

      .dark-theme.true,
      .light-theme.true {
        border-color: ${primary};
      }

      .dark-theme {
        background-color: ${background};
      }

      .light-theme {
        background-color: ${secondary};
      }
      @media only screen and (max-width: 900px) {
        flex-direction: column;

        .dark-theme,
        .light-theme {
          flex-basis: 110px;
          flex-grow: 0;
          max-width: 100%;
          margin-bottom: ${medium_space_1};
        }
      }
    }
  }

  form {
    width: 40%;
    flex-grow: 1;
    margin-right: ${small_space};

    > div {
      margin-top: ${medium_space_1} 0;
    }
  }

  p {
    font-size: ${body_1};
    color: ${text};
  }

  button {
    margin: ${medium_space_1} 0;
  }

  .label {
    font-size: 14px;
    font-weight: 500;
  }

  p.divider {
    cursor: pointer;
    color: ${props => (props.isDark ? secondary : alt_secondary)};
    padding-bottom: ${small_space};
    margin-bottom: ${extra_small_space};
    border-bottom: 1px solid ${lightgrey};
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;

    form {
      width: 90%;
    }

    section {
      width: 90%;
      margin-left: 0;
    }
  }
`;
