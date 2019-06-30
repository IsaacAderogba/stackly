import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import {
  lightgrey,
  background,
  alt_background,
  primary,
  secondary,
  alt_secondary,
  text
} from "../variables/colors";
import { small_space } from "../variables/spacing";

const Footer = props => {
  const { isDark } = props;

  return (
    <StyledFooter isDark={isDark}>
      <div>
        <p>
          Made with{" "}
          <span role="img" aria-label="coffee">
            ☕️
          </span>
          and{" "}
          <span role="img" aria-label="love">
            🤘🏼️
          </span>{" "}
          by <a href="https://github.com/IsaacAderogba">Isaac</a>
        </p>
      </div>
    </StyledFooter>
  );
};

const mapStateToProps = state => {
  return {
    isDark: state.user.isDark
  };
};

export default connect(mapStateToProps)(Footer);

const StyledFooter = styled.footer`
  border-top: 1px solid ${lightgrey};
  background-color: ${props => (props.isDark ? background : alt_background)};
  height: 10vh;
  min-height: 60px;

  div {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1280px;
  }

  p {
    height: inherit;
    padding: 0 ${small_space};
    color: ${text};

    a {
      text-decoration: none;
      color: ${primary};
      font-weight: 500;
    }

    a:hover {
      color: ${props => (props.isDark ? secondary : alt_secondary)};
    }
  }
`;
