import { Colors } from "../../Constants"
import styled from "styled-components"

export const ButtonRef = styled.a`
  --accent-color: white;

  /* This renders the buttons above... Edit me! */
  background: transparent;
  border-radius: 3px;
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;

  
  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  
`

export const HeaderContainer = styled.div`
  color: var(--tertiary-color);
  background-color: ${props => Colors.PrimaryColor};
  display: flex;
  padding: 0.5rem 0;
  width: 100%;

  transition: all 200ms ease-in-out;
  width: 11rem;

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  
`