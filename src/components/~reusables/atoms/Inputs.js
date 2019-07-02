import styled from "styled-components";
import { small_space, medium_space_1 } from "../variables/spacing";
import { text, primary, secondary, alt_secondary } from "../variables/colors";
import { button_text, body_1 } from "../variables/font-sizes";
import { tablet_max_width } from "../variables/media-queries";

export const Input = styled.input`
  font-size: ${button_text};
  box-shadow: 0 0.8rem 2.5rem 0 rgba(40, 51, 63, 0.05);
  transition: all 100ms ease-in-out;
  height: 40px;
  width: 100%;
  max-width: 324px;
  background-color: transparent;
  border: 1px solid ${text};
  border-radius: 4px;
  padding-left: ${small_space};
  margin-bottom: ${medium_space_1};
  color: ${props => (props.isDark ? secondary : alt_secondary)};

  &:focus {
    border-color: ${primary};
    outline: 0 none;
  }

  ::placeholder {
    color: ${text};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${text};
  }

  ::-ms-input-placeholder {
    color: ${text};
  }

  @media only screen and (max-width: ${tablet_max_width}) {
    font-size: ${body_1};
  }
`;
