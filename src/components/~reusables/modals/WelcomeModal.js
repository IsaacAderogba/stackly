import React, { useState } from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { useSpring, animated } from "react-spring";

import { ButtonPrimary } from "../atoms/Buttons";
import { background, text, white } from "../variables/colors";
import { heading_3, body_1 } from "../variables/font-sizes";
import { Input } from "../atoms/Inputs";
import { tablet_max_width } from "../variables/media-queries";
import { small_space, medium_space_1 } from "../variables/spacing";
import { updateProfile } from "../../../store/actions/userActions";
import { onboardingStarted } from "../../../store/actions/authActions";

import logo from "../assets/logo.png";

const WelcomeModal = props => {
  const { closeModal, user, updateProfile, setNextModal } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1
  });

  const onFormSubmit = e => {
    e.preventDefault();
    if (firstName && lastName) {
      updateProfile({
        firstName,
        lastName,
        id: user[0].id
      });
    }
    setNextModal(true);
    closeModal(false);
    onboardingStarted();
  };

  return (
    <StyledModal>
      <animated.div style={fade} className="popup">
        <div className="popup-inner">
          <form onSubmit={onFormSubmit}>
            <div className="logo-icon">
              <img src={logo} alt="Stackly Logo" />
            </div>
            <h4>Welcome to Stackly</h4>
            <p>Please enter your name to begin onboarding.</p>
            <Input
              required
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder={"Your first name"}
            />
            <Input
              required
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder={"Your last name"}
            />
            <ButtonPrimary>Get Started</ButtonPrimary>
          </form>
        </div>
      </animated.div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  z-index: 100;

  .logo-icon {
    padding-top: ${small_space};
    width: 60px;
    img {
      width: inherit;
    }
  }

  h4,
  p {
    text-align: center;
  }

  h4 {
    margin: ${small_space} 0 0 0;
    color: ${background};
    font-size: ${heading_3};
    font-weight: 600;
  }

  p {
    color: ${text};
    font-size: ${body_1};
  }

  form {
    width: 90%;

    input {
      width: 80%;
    }
  }

  .popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .popup-inner {
    padding: ${medium_space_1};
    background: ${white};
    position: absolute;
    left: 25%;
    right: 25%;
    top: 15%;
    bottom: 15%;
    margin: auto;
    border-radius: 20px;
    max-width: 800px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media only screen and (max-width: 900px) {
    .popup-inner {
      left: 17%;
      right: 17%;
    }
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    form {
      width: 100%;
      input {
        width: 80%;
      }
    }
    h4 {
      font-size: heading_4;
    }
    p {
      font-size: 14px;
    }
    .popup-inner {
      left: 10%;
      right: 10%;
      top: 15%;
      bottom: 15%;
    }
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: profile => dispatch(updateProfile(profile)),
    onboardingStarted: () => onboardingStarted()
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  firestoreConnect()
)(WelcomeModal);
