import React from "react";
import styled from "styled-components";
import Header from "../../~reusables/organisms/Header";
import Footer from "../../~reusables/organisms/Footer";
import LoginBody from "./LoginBody";

const Login = () => {
  return (
    <StyledLogin>
      <Header />
      <LoginBody />
      <Footer />
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
`;
