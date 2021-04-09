import styled from "styled-components";

interface Props {
  hoverable?: boolean;
}

export const Button = styled.button<Props>`
  background: transparent;
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
        background-color: #ADD8E6;
      }
    `;
  }}
`;
