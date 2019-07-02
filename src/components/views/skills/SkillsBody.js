import React from "react";
import styled from "styled-components";
import {
  medium_space_3,
  small_space
} from "../../~reusables/variables/spacing";
import Skill from "./Skill";
import { tablet_max_width } from "../../~reusables/variables/media-queries";

const SkillsBody = props => {
  const { user, skills, projects } = props;

  return (
    <StyledSkillsBody>
      {skills
        ? skills.map(skill => {
            return (
              <Skill
                setSelectSkill={props.setSelectSkill}
                setSkillsModal={props.setSkillsModal}
                setSelectProject={props.setSelectProject}
                setProjectModal={props.setProjectModal}
                skillId={skill.id}
                key={skill.id}
                user={user}
                name={skill.name}
                skillProjects={skill.projects}
                projects={projects}
              />
            );
          })
        : null}
    </StyledSkillsBody>
  );
};

const StyledSkillsBody = styled.main`
  padding: 0 ${medium_space_3};

  @media only screen and (max-width: ${tablet_max_width}) {
    padding: 0 ${small_space};
  }
`;

export default SkillsBody;
