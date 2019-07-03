import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  medium_space_3,
  small_space,
  medium_space_1
} from "../../~reusables/variables/spacing";
import Skill from "./Skill";
import { tablet_max_width } from "../../~reusables/variables/media-queries";
import logo from "../../~reusables/assets/logo.png";

const SkillsBody = props => {
  const { user, skills, projects } = props;

  return (
    <StyledSkillsBody>
      {skills
        ? skills.map(skill => {
            return (
              <Skill
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
      <Link to="/">
        <div className="logo-icon">
          <img src={logo} alt="Stackly Logo" />
        </div>
      </Link>
    </StyledSkillsBody>
  );
};

const StyledSkillsBody = styled.main`
  padding: 0 ${medium_space_3};

  .logo-icon {
    padding: ${medium_space_1} 0 ;
    width: 60px;
    margin: 0 auto;
    img {
      width: inherit;
    }
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    padding: 0 ${small_space};
  }
`;

export default SkillsBody;
