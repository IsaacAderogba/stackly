import React from 'react';
import styled from 'styled-components';
import { secondary, text, alt_secondary } from '../variables/colors';
import { body_1 } from '../variables/font-sizes'

const ProfileImage = ({name, image, isDark}) => {
    return (
        <StyledImage isDark={isDark}>
            <div>
                <img src={image} alt="" />
            </div>
            <p>{name}</p>
        </StyledImage>
    )
}

const StyledImage = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 200px;

    div {
        border-radius: 50%;
        border: 2px solid ${text};
        width: 80px;
        height: 80px;

        img {
            border-radius: inherit;
            width: inherit;
            height: inherit;
        }
    }

    p {
        text-align: center;
        color: ${props => (props.isDark ? secondary : alt_secondary)};
        font-size: ${body_1};
        font-weight: 600;
    }
`

export default ProfileImage;
