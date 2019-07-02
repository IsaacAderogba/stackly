import React from "react";
import styled from "styled-components";
import {
  lightgrey,
  text,
  primary,
  secondary,
  alt_secondary
} from "../../~reusables/variables/colors";
import { body_1 } from "../../~reusables/variables/font-sizes";
import {
  medium_space_1,
  small_space
} from "../../~reusables/variables/spacing";
import Project from "./Project";

const skill = {
  projects: [0, 1, 2],
  name: "JavaScript"
};

const Skill = props => {
  const { user } = props;
  let isDark = user[0].isDark;

  const renderSkill = () => {
    let mappedSkills = [];
    for (let i = 0; i < 5; i++) {
      if (typeof skill.projects[i] === "undefined") {
        mappedSkills.push(<div key={i} className="empty-box box" />);
      } else {
        mappedSkills.push(<div key={i} className="filled-box box" />);
      }
    }
    return mappedSkills;
  };

  return (
    <StyledSkill isDark={isDark}>
      <div className="skills">
        <div className="skills-box">{renderSkill()}</div>
        <span>{skill.name}</span>
      </div>
      <div className="projects">
        {skill.projects.map((project, idx) => {
          return <Project key={idx} name={skill.name} color={primary} isDark={isDark} />;
        })}
      </div>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  margin-top: ${medium_space_1};
  border-bottom: 1px solid ${lightgrey};
  padding: ${small_space} 0;
  color: ${text};
  font-size: ${body_1};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .skills {
    span,
    .skills-box {
      margin-top: 6px;
      margin-bottom: 6px;
    }
    span:hover {
      color: ${props => (props.isDark ? secondary : alt_secondary)};
      cursor: pointer;
    }
    .skills-box {
      display: flex;
    }
    display: flex;
    flex-wrap: wrap;
    .empty-box,
    .filled-box {
      width: 16px;
      height: 16px;
      border: 1px solid ${text};
      margin-right: 6px;
      border-radius: 2px;
    }
    .filled-box {
      background-color: ${primary};
    }
    .box:last-of-type {
      margin-right: ${small_space};
    }
  }

  .projects {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

export default Skill;
