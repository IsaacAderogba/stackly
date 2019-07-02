import React from "react";
import styled from "styled-components";
import { medium_space_3, small_space } from "../../~reusables/variables/spacing";
import Skill from "./Skill";
import { tablet_max_width } from "../../~reusables/variables/media-queries";

const SkillsBody = props => {
  const { user } = props;
  let isDark = user[0].isDark;

  return (<StyledSkillsBody>
    <Skill user={user} />
    <Skill user={user} />
  </StyledSkillsBody>);
};

const StyledSkillsBody = styled.main`
  padding: 0 ${medium_space_3};

  @media only screen and (max-width: ${tablet_max_width}) {
    padding: 0 ${small_space};
  }
`;

export default SkillsBody;
