import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const Header = (props) => {
    const { isDark } = props;

    return (
        <StyledHeader isDark={isDark} >Header</StyledHeader>
    )
}

const mapStateToProps = (state) => {
    return {
        isDark: state.user.isDark 
    }
}

export default connect(mapStateToProps)(Header);

const StyledHeader = styled.header`
    ${'' /* color: ${props => props.isDark ? secondary : alt_secondary }  */}
`




// import React from 'react';
// import { connect } from 'react-redux';

// import styled from 'styled-components';

// const Header = (props) => {
//     const { isDark } = props;

//     return (
//         <StyledHeader isDark={isDark} >Header</StyledHeader>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         isDark: state.user.isDark 
//     }
// }

// export default connect(mapStateToProps)(Header);

// const StyledHeader = styled.header`
//     ${'' /* color: ${props => props.isDark ? secondary : alt_secondary }  */}
// `