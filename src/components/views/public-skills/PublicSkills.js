import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import IsAuthUser from "../../hoc/IsAuthUser";
import { signOut } from "../../../store/actions/authActions";
import { background, alt_background } from "../../~reusables/variables/colors";
import SkillsHeader from "./SkillsHeader";
import SkillsBody from "./SkillsBody";
import ComponentLoader from "../../~reusables/molecules/ComponentLoader";

const PublicSkills = props => {
  const { user, skills, projects } = props;

  let isDark = null;
  if (user && user.length > 0) {
    isDark = user[0].isDark;
    return (
      <StyledSkills isDark={isDark}>
        <div>
          <SkillsHeader
            user={user}
          />
          <SkillsBody
            user={user}
            skills={skills}
            projects={projects}
          />
        </div>
      </StyledSkills>
    );
  } else {
    return <ComponentLoader height="100vh" />;
  }
};

const mapStateToProps = state => {
  return {
    user: state.firestore.ordered.user,
    skills: state.firestore.ordered.skills,
    projects: state.firestore.ordered.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => {

    return [
      {
        collection: "users",
        doc: `${props.match.params.id}`,
        storeAs: "user"
      },
      {
        collection: "skills",
        where: [
          "userId",
          "==",
          `${props.match.params.id ? props.match.params.id : []}`
        ]
      },
      {
        collection: "projects",
        where: [
          "userId",
          "==",
          `${props.match.params.id ? props.match.params.id : []}`
        ]
      }
    ];
  }),
  IsAuthUser
)(PublicSkills);

const StyledSkills = styled.section`
  display: flex;

  

  > div {
    min-height: 100vh;
    background-color: ${props => (props.isDark ? background : alt_background)};
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
