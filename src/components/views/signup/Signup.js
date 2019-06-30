import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {secondary, alt_secondary} from '../../~reusables/variables/colors';
import Header from '../../~reusables/organisms/Header';
import Footer from '../../~reusables/organisms/Footer';
import SignupBody from './SignupBody';

const Signup = (props) => {
    const { isDark } = props;
    return (
        <StyledSignup isDark={isDark}>
            <Header />
            <SignupBody />
            <Footer />
        </StyledSignup>
    )
}


const mapStateToProps = (state) => {
    return {
        isDark: state.user.isDark 
    }
}

export default connect(mapStateToProps)(Signup);


const StyledSignup = styled.div`
    ${'' /* color: ${props => props.isDark ? secondary : alt_secondary }  */}
`