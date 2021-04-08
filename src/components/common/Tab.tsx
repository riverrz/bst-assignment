import React from "react";
import styled from "styled-components";

interface Props {
  isActive?: boolean;
  onClick?: (eventKey: string) => void;
  eventKey: string;
  title: string;
  children?: React.ReactNode;
}

function Tab(props: Props) {
  const { isActive, onClick = () => {}, eventKey, title, children } = props;
  return (
    <>
      <StyledTab isActive={isActive} onClick={() => onClick(eventKey)}>
        {title}
      </StyledTab>
      {isActive && children}
    </>
  );
}

const StyledTab = styled.div<Partial<Props>>`
  color: var(--text-primary);
  border: 1px solid;
  border-color: transparent;
  padding: 1rem;
  cursor: pointer;
  ${({ isActive }) => {
    if (isActive) {
      return `
        color: var(--text-secondary);
        border-color: var(--text-secondary);
      `;
    }
  }}
`;

export default React.memo(Tab);
