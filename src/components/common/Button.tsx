import styled from "styled-components";

interface Props {
  hoverable?: boolean;
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary" | "dark";
  block?: boolean;
}

export const Button = styled.button<Props>`
  outline: none;
  border: none;
  // padding: 1rem 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  ${({ block }) => {
    if (block) {
      return `
        display: block;
        width: 100%;
      `;
    }
  }}
  ${({ hoverable }) => {
    if (!hoverable) {
      return "";
    }
    return `
      :hover {
        background-color: #F5FCFF;
      }
    `;
  }}
  ${({ variant, color = "primary" }) => {
    if (variant === "contained") {
      return `
        background-color: var(--${color});
        padding: 1rem 1.5rem;
        color: var(--white);
        border: 2px solid var(--${color});
        margin: 0 1rem;
      `;
    } else if (variant === "outlined") {
      return `
        padding: 1rem 1.5rem;
        border: 2px solid var(--${color});
        margin: 0 1rem;
        
      `;
    } else {
      return `
        background: transparent;
      `;
    }
  }}
`;
