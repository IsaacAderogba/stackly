import React from "react";
import styled from "styled-components";
import Header from "../../~reusables/organisms/Header";
import Footer from "../../~reusables/organisms/Footer";
import SignupBody from "./SignupBody";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Signup = (props) => {
  const { user } = props;
  return (
    <StyledSignup>
      <Header user={user} />
      <SignupBody user={user} />
      <Footer user={user} />
    </StyledSignup>
  );
};

const mapStateToProps = (state) => {
    return {
        user: state.firestore.ordered.user
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        return [
          {
            collection: "users",
            where: ["email", "==", 'isaacaderogba1@gmail.com'],
            storeAs: "user"
          }
        ];
      })
)(Signup);

const StyledSignup = styled.div``;
