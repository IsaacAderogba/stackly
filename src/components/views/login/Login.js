import React from "react";
import styled from "styled-components";
import Header from "../../~reusables/organisms/Header";
import Footer from "../../~reusables/organisms/Footer";
import LoginBody from "./LoginBody";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Login = props => {
  const { user } = props;

  return (
    <StyledLogin>
      <Header user={user} />
      <LoginBody user={user} />
      <Footer user={user} />
    </StyledLogin>
  );
};

const mapStateToProps = state => {
  return {
    user: state.firestore.ordered.user
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        where: ["email", "==", "isaacaderogba1@gmail.com"],
        storeAs: "user"
      }
    ];
  })
)(Login);

const StyledLogin = styled.div``;
