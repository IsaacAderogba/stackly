import React from "react";
import styled from "styled-components";
import Header from "../../~reusables/organisms/Header";
import Footer from "../../~reusables/organisms/Footer";
import SignupBody from "./SignupBody";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Signup = props => {
  const { user } = props;
  console.log(user);

  return (
    <StyledSignup>
      <Header user={user} />
      <SignupBody user={user} />
      <Footer user={user} />
    </StyledSignup>
  );
};

const mapStateToProps = state => {
  console.log(state);
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
  })
)(Signup);

const StyledSignup = styled.div`

`;
