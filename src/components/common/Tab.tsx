import React from "react";
import styled from "styled-components";
import { Base } from "./Base";

interface Props {
  isActive?: boolean;
  onClick?: (eventKey: string) => void;
  eventKey: string;
  title: string;
  children?: React.ReactNode;
}

export const Tab = React.memo(function (props: Props) {
  const { isActive, onClick = () => {}, eventKey, title, children } = props;
  return (
    <>
      <StyledTab isActive={isActive} onClick={() => onClick(eventKey)}>
        {title}
      </StyledTab>
      {isActive && children}
    </>
  );
});

const StyledTab = styled(Base)<Partial<Props>>`
  color: var(--primary);
  border-bottom: 2px solid;
  border-color: transparent;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 5px;
  transition: color 0.4s ease, border-color 0.4s ease;
  ${({ isActive }) => {
    if (isActive) {
      return `
        color: var(--secondary);
        border-color: var(--secondary);
      `;
    }
  }}
`;
