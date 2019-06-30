import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { signIn } from "../../../store/actions/authActions";
import {
  background,
  alt_background,
  secondary,
  alt_secondary
} from "../../~reusables/variables/colors";
import {
  extra_large_space,
  medium_space_3,
  medium_space_2
} from "../../~reusables/variables/spacing";
import { heading_2 } from "../../~reusables/variables/font-sizes";
import { Input } from "../../~reusables/atoms/Inputs";
import { ButtonPrimary } from "../../~reusables/atoms/Buttons";
import { tablet_max_width } from "../../~reusables/variables/media-queries";

const LoginBody = props => {
  const { user, signIn, authError } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let isDark = null;
  if (user) {
    isDark = user[0].isDark;
  }

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <StyledLoginBody isDark={isDark}>
      <div>
        <h2>Sign in to your account</h2>
        <form onSubmit={onFormSubmit}>
          <Input
            value={email}
            onChange={onEmailChange}
            placeholder="Your email"
          />
          <Input
            value={password}
            onChange={onPasswordChange}
            placeholder="Your password"
          />
          <ButtonPrimary width="200px" isDark={isDark}>
            Log In
          </ButtonPrimary>
        </form>
        {authError ? <p>{authError}</p> : null}
      </div>
    </StyledLoginBody>
  );
};

const mapStateToProps = state => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(LoginBody);

const StyledLoginBody = styled.main`
  background-color: ${props => (props.isDark ? background : alt_background)};
  min-height: 80vh;

  > div {
    max-width: 1280px;
    margin: 0 auto;
    padding: ${extra_large_space} 0;

    h2 {
      color: ${props => (props.isDark ? secondary : alt_secondary)};
      text-align: center;
      font-size: ${heading_2};
    }

    form {
      margin: ${medium_space_3} auto;
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    p {
        color: #bb0000;
        text-align: center;
    }

    @media only screen and (max-width: ${tablet_max_width}) {
      padding: ${medium_space_2} 0;
      form {
        width: 70%;
      }
    }
  }
`;
