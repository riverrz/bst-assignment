import React from "react";
import styled from "styled-components";

interface Props {
  as?: "h1" | "h2" | "h3" | "p";
  color?: "primary" | "secondary";
  gutterBottom?: boolean;
  fontSize?: string;
  children?: React.ReactNode;
}

export const Typography = React.memo(function (props: Props) {
  const StyledElement = buildTypographyElement(props);
  return <StyledElement>{props.children}</StyledElement>;
});

function buildTypographyElement(props: Props) {
  const { as = "h1", color = "primary", gutterBottom, fontSize } = props;
  return styled[as]`
    color: ${getColor(color)};
    ${gutterBottom ? "margin-bottom: 10px" : ""};
    ${fontSize ? `font-size: ${fontSize}` : ""};
  `;
}

function getColor(color: Props["color"]) {
  switch (color) {
    case "primary":
      return "var(--text-primary)";
    case "secondary":
      return "var(--text-secondary)";
    default:
      return "var(--text-primary)";
  }
}
