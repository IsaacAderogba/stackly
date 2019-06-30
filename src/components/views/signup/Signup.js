import React from "react";
import styled from "styled-components";
import Header from "../../~reusables/organisms/Header";
import Footer from "../../~reusables/organisms/Footer";
import SignupBody from "./SignupBody";

const Signup = () => {
  return (
    <StyledSignup>
      <Header />
      <SignupBody />
      <Footer />
    </StyledSignup>
  );
};

export default Signup;

const StyledSignup = styled.div``;
