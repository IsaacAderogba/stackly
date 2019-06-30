import styled from 'styled-components';
import { extra_small_space } from '../variables/spacing';
import { white, primary, alt_secondary, secondary, background, alt_background } from '../variables/colors';
import { button_text, body_1 } from '../variables/font-sizes'

export const Button = styled.button`
  font-size: ${button_text};
  padding: 6px ${extra_small_space};
  font-weight: 500;
  min-width: ${props => (props.width ? props.width : '160px')};
  height: 40px;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: 0 .8rem 2.5rem 0 rgba(40, 51, 63, .11);
  transition: all 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }
  
  &:active {
    opacity: .8;
    box-shadow: 0 6px 10px 0 rgba(40, 51, 63, .11);
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${primary};
  color: ${white};
`;

export const ButtonSecondary = styled(Button)`
  background-color: ${props => (props.isDark ? secondary : alt_secondary)};
  color: ${props => (props.isDark ? background : alt_background)};
`;

export const TextButton = styled(Button)`
  background-color: transparent;
  color: ${primary};
  padding: 0;
  min-width: auto;
  box-shadow: none;
`;

export const ButtonTertiary = styled(Button)`
  background-color: ${props => (props.isDark ? background : alt_background)};
  color: ${props => (props.isDark ? secondary : alt_secondary)};
  border: 1px solid ${props => (props.isDark ? secondary : alt_secondary)};
  font-size: ${body_1};
`;
