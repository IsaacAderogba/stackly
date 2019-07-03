import React from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { ButtonPrimary } from "../atoms/Buttons";
import {
  background,
  text,
  primary,
  secondary,
  white,
  lightgrey
} from "../variables/colors";
import { heading_3, body_1 } from "../variables/font-sizes";
import { tablet_max_width } from "../variables/media-queries";
import {
  small_space,
  medium_space_1,
  extra_small_space
} from "../variables/spacing";
import { setDarkTheme } from "../../../store/actions/userActions";
import darkTheme from "../assets/dark-theme.png";
import lightTheme from "../assets/light-theme.png";

const ThemeModal = props => {
  const { closeModal, user, setNextModal, isDark, setDarkTheme } = props;
  console.log(user);

  const onFormSubmit = e => {
    e.preventDefault();
    setNextModal(true);
    closeModal(false);
  };

  return (
    <StyledModal>
      <div className="popup">
        <div className="popup-inner">
          <form onSubmit={onFormSubmit}>
            <h4>Choose Your Theme</h4>
            <p>
              This is the theme that people will see if you share your
              profile. You can change this at any time.
            </p>
            <div className="theme-options">
              <section>
                <div
                  onClick={() =>
                    setDarkTheme({ value: true, userId: user[0].id })
                  }
                  className={`dark-theme ${isDark}`}
                >
                  <img src={darkTheme} alt="" />
                </div>
                <p>Dark</p>
              </section>
              <section>
                <div
                  onClick={() =>
                    setDarkTheme({ value: false, userId: user[0].id })
                  }
                  className={`light-theme ${!isDark}`}
                >
                  <img src={lightTheme} alt="" />
                </div>
                <p>Light</p>
              </section>
            </div>
            <ButtonPrimary>Continue</ButtonPrimary>
          </form>
        </div>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  z-index: 100;

  .theme-options {
    margin: ${small_space} 0;
    display: flex;
    justify-content: space-between;

    section {
      flex-basis: 200px;
      flex-grow: 1;
      max-width: 47%;

      p {
        color: ${background};
        font-weight: 500;
        margin: ${extra_small_space};
      }
    }

    .dark-theme,
    .light-theme {
      border: 2px solid ${lightgrey};
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
    setDarkTheme: darkTheme => dispatch(setDarkTheme(darkTheme))
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  firestoreConnect()
)(ThemeModal);
