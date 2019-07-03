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
import { small_space } from "../../~reusables/variables/spacing";
import Project from "./Project";

const Skill = props => {
  const { user, name, skillProjects, projects } = props;
  let isDark = user[0].isDark;

  const renderSkill = () => {
    let mappedSkills = [];
    for (let i = 0; i < 5; i++) {
      if (typeof skillProjects[i] === "undefined") {
        mappedSkills.push(<div key={i} className="empty-box box" />);
      } else {
        mappedSkills.push(<div key={i} className="filled-box box" />);
      }
    }
    return mappedSkills;
  };

  let filteredProjects = [];
  if (projects) {
    skillProjects.forEach(skProject => {
      let foundProject = projects.find(project => project.id === skProject);
      if (foundProject) {
        filteredProjects = [...filteredProjects, foundProject];
      }
    });
  }

  return (
    <StyledSkill isDark={isDark}>
      <div className="skills">
        <div className="skills-box">{renderSkill()}</div>
        <span>{name}</span>
      </div>
      <div className="projects">
        {filteredProjects.length > 0
          ? filteredProjects.map(project => {
              return (
                <Project
                  setSelectProject={props.setSelectProject}
                  setProjectModal={props.setProjectModal}
                  project={project}
                  key={project.id}
                  name={project.name}
                  color={project.color}
                  isDark={isDark}
                />
              );
            })
          : null}
      </div>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  margin-top: ${small_space};
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
