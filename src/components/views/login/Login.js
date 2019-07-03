import React from "react";
import styled from "styled-components";
import Header from "../../~reusables/layout/Header";
import Footer from "../../~reusables/layout/Footer";
import LoginBody from "./LoginBody";
import HasLoggedIn from "../../hoc/HasLoggedIn";
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
    user: state.firestore.ordered.user,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        where: ["email", "==", `${props.auth.email}`],
        storeAs: "user"
      }
    ];
  }),
  HasLoggedIn
)(Login);

const StyledLogin = styled.div``;
