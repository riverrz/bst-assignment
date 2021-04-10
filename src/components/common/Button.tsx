import styled from "styled-components";

interface Props {
  hoverable?: boolean;
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary" | "dark";
}

export const Button = styled.button<Props>`
  outline: none;
  border: none;
  // padding: 1rem 1.5rem;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.3s ease;
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
      `;
    } else if (variant === "outlined") {
      return `
        padding: 1rem 1.5rem;
        border: 2px solid var(--${color});
      `;
    } else {
      return `
        background: transparent;
      `;
    }
  }}
`;
