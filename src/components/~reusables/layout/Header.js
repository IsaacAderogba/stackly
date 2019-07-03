import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import styled from "styled-components";
import {
  lightgrey,
  background,
  alt_background,
  primary,
  secondary,
  alt_secondary
} from "../variables/colors";
import { small_space, extra_small_space } from "../variables/spacing";
import { body_hero } from "../variables/font-sizes";

const Header = props => {
  const { user } = props;

  let isDark = null;
  if(user) {
    isDark = user.length > 0 ? user[0].isDark : null;
  }

  return (
    <StyledHeader isDark={isDark} >
      <nav>
        <Link className="logo" to="/">
          <div className="logo-icon">
            <img src={logo} alt="Stackly Logo" />
          </div>
          <div className="logo-text">Stackly</div>
        </Link>
        <ul>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

const mapStateToProps = state => {
  return {
    isDark: state.user.isDark
  };
};

export default connect(mapStateToProps)(Header);

const StyledHeader = styled.header`
  border-bottom: 1px solid ${lightgrey};
  background-color: ${props => (props.isDark ? background : alt_background)};
  height: 10vh;
  min-height: 60px;

  nav {
    height: inherit;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    padding: 0 ${small_space};
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${primary};
    font-weight: 500;
  }

  a.logo {
    display: flex;
    color: ${props => (props.isDark ? secondary : alt_secondary)};
    font-size: ${body_hero};
    font-weight: bold;

    .logo-text {
      padding-top: 20px;
      padding-left: ${extra_small_space};
    }

    .logo-icon {
      padding-top: ${small_space};
      width: 40px;
      img {
        width: inherit;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li a:hover {
    color: ${props => (props.isDark ? secondary : alt_secondary)};
  }
`;
