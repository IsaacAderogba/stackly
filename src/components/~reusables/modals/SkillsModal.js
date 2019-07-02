import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../atoms/Buttons";
import { background, white, text } from "../variables/colors";
import { heading_3, body_2 } from "../variables/font-sizes";
import { Input } from "../atoms/Inputs";
import { tablet_max_width } from "../variables/media-queries";
import { small_space, medium_space_1 } from "../variables/spacing";

const Modal = props => {
  return (
    <StyledModal>
      <div className="popup">
        <div className="popup-inner">
          <form>
            <span onClick={() => props.closeModal(false)}>Close Modal</span>
            <h4>Enter a Skill</h4>
            <p>
              Stackly helps you highlight your skills based on evidence.
            </p>
            <Input required placeholder="Skill name" />
            <ButtonPrimary>Add Skill</ButtonPrimary>
          </form>
        </div>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  z-index: 100;

  span,
  h4,
  p {
    text-align: center;
  }

  span {
      font-size: 14px;
      color: ${text};
      cursor: pointer;
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
    left: 17%;
    right: 17%;
    top: 21%;
    bottom: 21%;
    margin: auto;
    border-radius: 20px;
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

export default Modal;
