import React, { useState } from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import Select from "react-select";
import {
  createProject,
  updateProject
} from "../../../store/actions/projectActions";
import { ButtonPrimary } from "../atoms/Buttons";
import { background, white, text } from "../variables/colors";
import { heading_3, body_1 } from "../variables/font-sizes";
import { Input } from "../atoms/Inputs";
import { tablet_max_width } from "../variables/media-queries";
import { small_space, medium_space_1 } from "../variables/spacing";
import ColorPicker from "../atoms/ColorPicker";

const ProjectModal = props => {
  const { closeModal, user, skills, createProject, selectProject } = props;
  const [projectColor, setProjectColor] = useState(
    selectProject ? selectProject.color : "#be215b"
  );
  const [projectName, setProjectName] = useState(
    selectProject ? selectProject.name : ""
  );
  const [projectUrl, setProjectUrl] = useState(
    selectProject ? selectProject.url : ""
  );
  const [relatedSkills, setRelatedSkills] = useState([]);

  let skillOptions = [];
  if (skills) {
    skills.forEach(skill => {
      skillOptions.push({
        value: skill.id,
        label: skill.name,
        oldArray: skill.projects
      });
    });
  }

  const onFormSubmit = e => {
    e.preventDefault();
    if (selectProject) {
      props.updateProject({
        name: projectName,
        url: projectUrl,
        skills: relatedSkills,
        color: projectColor,
        allSkills: skills,
        id: selectProject.id
      });
      // update the project
    } else {
      createProject({
        userId: user[0].id,
        name: projectName,
        url: projectUrl,
        skills: relatedSkills,
        color: projectColor
      });
    }
    props.setSelectProject(null);
    closeModal(false);
  };

  const onCloseModal = () => {
    props.setSelectProject(null);
    closeModal(false);
  };

  return (
    <StyledModal>
      <div className="popup">
        <div className="popup-inner">
          <div className="options">
            <span className="close" onClick={onCloseModal}>
              Close
            </span>
            <ColorPicker setProjectColor={setProjectColor} />
            {selectProject ? (
              <span className="delete" onClick={onCloseModal}>
                Delete
              </span>
            ) : null}
          </div>
          <div className="space" />
          <form onSubmit={onFormSubmit}>
            {selectProject ? <h4>Update Project</h4> : <h4>Enter a Project</h4>}
            <p>A project can be linked to one or more skills.</p>
            <Input
              margin="16px"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              required
              placeholder="Project name"
            />
            <Input
              margin="16px"
              value={projectUrl}
              onChange={e => setProjectUrl(e.target.value)}
              required
              placeholder="Project url"
            />
            <Select
              styles={{ control: styles => ({ ...styles, borderColor: text }) }}
              className="select"
              isMulti
              options={skills ? skillOptions : []}
              onChange={e => setRelatedSkills(e)}
            />
            <ButtonPrimary>
              {selectProject ? "Update Project" : "Enter Project"}
            </ButtonPrimary>
          </form>
          <div className="space-2" />
        </div>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  z-index: 100;

  .options {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  span,
  h4,
  p {
    text-align: center;
  }

  span {
    cursor: pointer;
  }

  .space {
    flex-grow: 5;
  }

  .space-2 {
    flex-grow: 4;
  }

  .close {
    font-size: ${body_1};
    color: ${text};
  }

  .delete {
    color: #bb0000;
  }

  h4 {
    margin: ${small_space} 0 0 0;
    color: ${background};
    font-size: ${heading_3};
    font-weight: 600;
  }

  p {
    color: ${text};
  }

  form {
    width: 90%;

    input {
      width: 80%;
    }

    .select {
      width: 60%;
      margin-bottom: ${small_space};
    }
  }

  .popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .popup-inner {
    padding: ${medium_space_1};
    background: ${white};
    position: absolute;
    left: 25%;
    right: 25%;
    top: 15%;
    bottom: 15%;
    margin: auto;
    border-radius: 20px;
    max-width: 800px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media only screen and (max-width: 900px) {
    .popup-inner {
      left: 17%;
      right: 17%;
    }
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    form {
      width: 100%;
    }
    h4 {
      font-size: heading_4;
    }
    p {
      font-size: 14px;
    }
    .popup-inner {
      left: 10%;
      right: 10%;
      top: 15%;
      bottom: 15%;
    }
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
    updateProject: project => dispatch(updateProject(project))
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  firestoreConnect()
)(ProjectModal);
