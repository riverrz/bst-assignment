import styled from "styled-components";
import { Base, BaseProps } from "./Base";

interface Props extends BaseProps {
  direction?: "row" | "column";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  inline?: boolean;
  flexWrap?: "wrap" | "nowrap";
}

export const Flex = styled(Base)<Props>`
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
`;
