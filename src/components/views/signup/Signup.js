import React from "react";
import styled from "styled-components";
import Header from "../../~reusables/organisms/Header";
import Footer from "../../~reusables/organisms/Footer";
import SignupBody from "./SignupBody";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Signup = props => {
  const { user, skills } = props;

  return (
    <StyledSignup>
      <Header user={user} />
      <SignupBody user={user} skills={skills} />
      <Footer user={user} />
    </StyledSignup>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.firestore.ordered.user,
    skills: state.firestore.ordered.skills,
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
      },
      {
        collection: "skills",
        where: [
          "userId",
          "==",
          `${props.user && props.user.length > 0 ? props.user[0].id : ""}`
        ]
      },
    ];
  })
)(Signup);

const StyledSignup = styled.div`

`;
