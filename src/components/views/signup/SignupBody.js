import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { signUp } from "../../../store/actions/authActions";
import {
  background,
  alt_background,
  secondary,
  alt_secondary,
  text
} from "../../~reusables/variables/colors";
import {
  extra_large_space,
  medium_space_3,
  medium_space_2
} from "../../~reusables/variables/spacing";
import {
  body_hero,
  heading_1,
  heading_2,
  body_1
} from "../../~reusables/variables/font-sizes";
import { Input } from "../../~reusables/atoms/Inputs";
import { ButtonPrimary } from "../../~reusables/atoms/Buttons";
import { tablet_max_width } from "../../~reusables/variables/media-queries";
import ComponentLoader from "../../~reusables/molecules/ComponentLoader";
import WelcomeModal from "../../~reusables/modals/WelcomeModal";
import ThemeModal from "../../~reusables/modals/ThemeModal";
import SkillsModal from "../../~reusables/modals/SkillsModal";
import ProjectModal from "../../~reusables/modals/ProjectModal";
import lightHero from "../../~reusables/assets/light-hero.png";
import darkHero from "../../~reusables/assets/dark-hero.png";

const SignupBody = props => {
  const {
    user,
    signUp,
    signupError,
    signupLoader,
    signupSuccess,
    skills
  } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [welcomeModal, setWelcomeModal] = useState(null);
  const [themeModal, setThemeModal] = useState(null);
  const [skillModal, setSkillModal] = useState(null);
  const [projectModal, setProjectModal] = useState(null);

  let isDark = null;
  if (user) {
    isDark = user.length > 0 ? user[0].isDark : null;
  }

  useEffect(() => {
    if (signupSuccess) {
      setWelcomeModal(true);
    }
  }, [signupSuccess]);

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    signUp({ email, password });
  };

  return (
    <StyledSignupBody isDark={isDark}>
      {welcomeModal ? (
        <WelcomeModal
          user={user}
          closeModal={setWelcomeModal}
          setNextModal={setThemeModal}
        />
      ) : null}
      {themeModal ? (
        <ThemeModal
          user={user}
          closeModal={setThemeModal}
          setNextModal={setSkillModal}
          isDark={isDark}
        />
      ) : null}
      {skillModal ? (
        <SkillsModal
          user={user}
          closeModal={setSkillModal}
          skillModalStatus={skillModal}
          setNextModal={setProjectModal}
        />
      ) : null}
      {projectModal ? (
        <ProjectModal
          skills={skills}
          user={user}
          closeModal={setProjectModal}
          skillModalStatus={projectModal}
        />
      ) : null}
      <div>
        <h1>Your Skills-Based Resume</h1>
        <p>
          Stackly helps you highlight your skills based on evidence. For each
          skill you list, proficiency is based on the number of projects you
          have completed using that skill.
        </p>
        <form onSubmit={onFormSubmit}>
          <Input
            isDark={isDark}
            value={email}
            onChange={onEmailChange}
            placeholder="Your email"
          />
          <Input
            type="password"
            isDark={isDark}
            value={password}
            onChange={onPasswordChange}
            placeholder="Your password"
          />
          <ButtonPrimary width="200px" isDark={isDark}>
            Sign Up
          </ButtonPrimary>
        </form>
        {signupLoader ? (
          <ComponentLoader isDark={isDark} height="50px" />
        ) : null}
        {signupError ? <p className="error">{signupError}</p> : null}
        <div className="image-container">
          <img src={isDark ? darkHero : lightHero} alt="hero" />
        </div>
      </div>
    </StyledSignupBody>
  );
};

const mapStateToProps = state => {
  return {
    signupError: state.auth.signupError,
    signupSuccess: state.auth.signupSuccess,
    signupLoader: state.auth.signupLoader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupBody);

const StyledSignupBody = styled.main`
  background-color: ${props => (props.isDark ? background : alt_background)};

  .image-container {
    display: flex;
    justify-content: center;
    width: 100%;
    img {
      width: 90%;
    }
  }

  > div {
    max-width: 1280px;
    margin: 0 auto;
    padding: ${extra_large_space} 0;

    h1 {
      color: ${props => (props.isDark ? secondary : alt_secondary)};
      text-align: center;
      font-size: ${heading_1};
    }

    > p {
      margin: 0 auto;
      color: ${text};
      font-size: ${body_hero};
      text-align: center;
      width: 75%;
    }

    .error {
      color: #bb0000;
      text-align: center;
      font-size: ${body_1};
    }

    > form {
      margin: ${medium_space_3} auto;
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media only screen and (max-width: ${tablet_max_width}) {
      padding: ${medium_space_2} 0;

      > h1 {
        font-size: ${heading_2};
      }
      > p {
        font-size: ${body_1};
        width: 90%;
      }
      > form {
        width: 70%;
      }
    }
  }
`;
