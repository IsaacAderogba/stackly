import React from 'react';
import styled from 'styled-components';
import { secondary, text, alt_secondary } from '../variables/colors';
import { body_1 } from '../variables/font-sizes'

const ProfileImage = ({name, image, isDark, size, fontSize}) => {
    return (
        <StyledImage isDark={isDark} size={size} fontSize={fontSize}>
            <div>
                <img src={image} alt="" />
            </div>
            {name ? <p>{name}</p> : null}
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
        width: ${props => (props.size ? props.size : '80px')};
        height: ${props => (props.size ? props.size : '80px')};

        img {
            border-radius: inherit;
            width: inherit;
            height: inherit;
        }
    }

    p {
        text-align: center;
        color: ${props => (props.isDark ? secondary : alt_secondary)};
        font-size: ${props => props.fontSize ? props.fontSize : body_1};
        font-weight: 600;
    }
`

export default ProfileImage;
