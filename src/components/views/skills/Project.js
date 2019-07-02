import React from "react";
import styled from "styled-components";
import {
  text,
  primary,
  secondary,
  alt_secondary
} from "../../~reusables/variables/colors";
import { body_1 } from "../../~reusables/variables/font-sizes";
import {
  extra_small_space,
  small_space
} from "../../~reusables/variables/spacing";

const Project = ({ color, name, isDark }) => {
  return (
    <StyledProject color={color} isDark={isDark}>
      <span>{name}</span>
      <div className="color" />
    </StyledProject>
  );
};

const StyledProject = styled.div`
  color: ${text};
  font-size: ${body_1};
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: ${small_space};
  display: flex;
  align-items: center;
  span {
    margin-right: ${extra_small_space};
  }
  span:hover {
    color: ${props => (props.isDark ? secondary : alt_secondary)};
    cursor: pointer;
  }
  .color {
    height: 8px;
    width: 8px;
    border-radius: 100%;
    background-color: ${props => (props.color ? props.color : primary)};
  }
`;

export default Project;
