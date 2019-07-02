import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import IsAuthUser from "../../hoc/IsAuthUser";
import { signOut } from "../../../store/actions/authActions";
import Sidebar from "../../~reusables/organisms/Sidebar";
import { background, alt_background } from "../../~reusables/variables/colors";
import MobileNavbar from "../../~reusables/organisms/MobileNavbar";
import SkillsHeader from "./SkillsHeader";
import { tablet_max_width } from "../../~reusables/variables/media-queries";
import SkillsBody from "./SkillsBody";
import SkillsModal from "../../~reusables/modals/SkillsModal";
import ProjectModal from "../../~reusables/modals/ProjectModal";

const Skills = props => {
  const { user, skills, projects } = props;
  const [showSkillsModal, setSkillsModal] = useState(false);
  const [showProjectModal, setProjectModal] = useState(false);

  let isDark = null;
  if (user && user.length > 0) {
    isDark = user[0].isDark;
    return (
      <StyledSkills isDark={isDark}>
        <Sidebar user={user} />
        <MobileNavbar user={user} />
        <div>
          {showSkillsModal ? (
            <SkillsModal user={user} closeModal={setSkillsModal} />
          ) : null}
          {showProjectModal ? (
            <ProjectModal
              user={user}
              closeModal={setProjectModal}
              skills={skills}
            />
          ) : null}
          <SkillsHeader
            user={user}
            setSkillsModal={setSkillsModal}
            setProjectModal={setProjectModal}
          />
          <SkillsBody user={user} skills={skills} projects={projects} />
        </div>
      </StyledSkills>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = state => {
  return {
    user: state.firestore.ordered.user,
    skills: state.firestore.ordered.skills,
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
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
        where: ["email", "==", `${props.auth.email}`],
        storeAs: "user"
      },
      {
        collection: "skills",
        where: [
          "userId",
          "==",
          `${props.user && props.user.length > 0 ? props.user[0].id : ""}`
        ]
      },
      {
        collection: "projects",
        where: [
          "userId",
          "==",
          `${props.user && props.user.length > 0 ? props.user[0].id : ""}`
        ]
      }
    ];
  }),
  IsAuthUser
)(Skills);

const StyledSkills = styled.section`
  display: flex;

  > div {
    min-height: 100vh;
    background-color: ${props => (props.isDark ? background : alt_background)};
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    margin-bottom: 70px;
  }
`;
