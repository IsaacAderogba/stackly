import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
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

const SignupBody = props => {
  const { user } = props;

  let isDark = null;
  if (user) {
    isDark = user[0].isDark;
  }

  return (
    <StyledSignupBody isDark={isDark}>
      <div>
        <h1>Your Skills-Based Resume</h1>
        <p>
          Stackly helps you highlight your skills based on evidence. For each
          skill you list, proficiency is determined based on the number of
          projects you have completed using that skill.
        </p>
        <form>
          <Input placeholder="Your email" />
          <Input placeholder="Your password" />
          <ButtonPrimary width="200px" isDark={isDark}>
            Sign Up
          </ButtonPrimary>
        </form>
      </div>
    </StyledSignupBody>
  );
};

const mapStateToProps = state => {
  return {
    isDark: state.user.isDark
  };
};

export default connect(mapStateToProps)(SignupBody);

const StyledSignupBody = styled.main`
  background-color: ${props => (props.isDark ? background : alt_background)};

  > div {
    max-width: 1280px;
    margin: 0 auto;
    padding: ${extra_large_space} 0;

    h1 {
      color: ${props => (props.isDark ? secondary : alt_secondary)};
      text-align: center;
      font-size: ${heading_1};
    }

    p {
      margin: 0 auto;
      color: ${text};
      font-size: ${body_hero};
      text-align: center;
      width: 75%;
    }

    form {
      margin: ${medium_space_3} auto;
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media only screen and (max-width: ${tablet_max_width}) {
      padding: ${medium_space_2} 0;

      h1 {
        font-size: ${heading_2};
      }
      p {
        font-size: ${body_1};
        width: 90%;
      }
      form {
        width: 70%;
      }
    }
  }
`;
