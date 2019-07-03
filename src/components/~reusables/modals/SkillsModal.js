import React, { useState } from "react";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { ButtonPrimary } from "../atoms/Buttons";
import { background, text, white } from "../variables/colors";
import { heading_3, body_1 } from "../variables/font-sizes";
import { Input } from "../atoms/Inputs";
import { tablet_max_width } from "../variables/media-queries";
import { small_space, medium_space_1 } from "../variables/spacing";
import { createSkill, updateSkill, deleteSkill } from "../../../store/actions/skillActions";

const SkillsModal = props => {
  const {
    closeModal,
    user,
    createSkill,
    selectSkill,
    updateSkill,
    skillModalStatus,
    setNextModal,
    deleteSkill
  } = props;
  const [skillName, setSkillName] = useState(
    selectSkill ? selectSkill.name : ""
  );

  const onFormSubmit = e => {
    e.preventDefault();
    if (skillModalStatus) {
      createSkill({ userId: user[0].id, name: skillName });
      setNextModal(true);
    } else if (selectSkill) {
      updateSkill({ id: selectSkill.id, name: skillName });
      props.setSelectSkill(null);
    } else {
      createSkill({ userId: user[0].id, name: skillName });
      props.setSelectSkill(null);
    }
    setSkillName("");
    closeModal(false);
  };

  const onCloseModal = () => {
    props.setSelectSkill(null);
    closeModal(false);
  };

  const onDeleteSkill = () => {
    deleteSkill(selectSkill.id);
    props.setSelectSkill(null);
    closeModal(false);
  }

  console.log(selectSkill);

  return (
    <StyledModal>
      <div className="popup">
        <div className="popup-inner">
          <div className="options">
            {skillModalStatus ? null : (
              <span className="close" onClick={onCloseModal}>
                Close
              </span>
            )}
            {selectSkill ? (
              <span className="delete" onClick={onDeleteSkill}>
                Delete
              </span>
            ) : null}
          </div>
          <div className="space" />
          <form onSubmit={onFormSubmit}>
            {selectSkill ? <h4>Update Skill</h4> : <h4>Enter a Skill</h4>}
            <p>Stackly helps you highlight your skills based on evidence.</p>
            <Input
              required
              value={skillName}
              onChange={e => setSkillName(e.target.value)}
              placeholder={selectSkill ? selectSkill.name : "Skill name"}
            />
            {selectSkill ? (
              <ButtonPrimary>Update Skill</ButtonPrimary>
            ) : (
              <ButtonPrimary>Add Skill</ButtonPrimary>
            )}
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
    width: 60%;
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
      input {
        width: 80%;
      }
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
    createSkill: skill => dispatch(createSkill(skill)),
    updateSkill: skill => dispatch(updateSkill(skill)),
    deleteSkill: skillId => dispatch(deleteSkill(skillId))
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  firestoreConnect()
)(SkillsModal);
