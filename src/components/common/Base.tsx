import styled from "styled-components";

export interface BaseProps {
  padding?: string;
  margin?: string;
}

export const Base = styled.div<BaseProps>`
  padding: ${({ padding }) => padding || ""};
  margin: ${({ margin }) => margin || ""};
`;
