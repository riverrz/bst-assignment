import React from "react";
import styled from "styled-components";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
  color?: "primary" | "secondary";
  gutterBottom?: boolean;
  fontSize?: string;
  fontWeight?: string | number;
  transform?: string;
  fontStyle?: string;
  children?: React.ReactNode;
  textAlign?: string;
}

export const Typography = React.memo(function (props: Props) {
  const StyledElement = buildTypographyElement(props);
  return <StyledElement>{props.children}</StyledElement>;
});

function buildTypographyElement(props: Props) {
  const {
    as = "h1",
    color = "primary",
    gutterBottom,
    fontSize,
    fontWeight,
    transform,
    fontStyle,
    textAlign,
  } = props;
  return styled[as]`
    color: ${getColor(color)};
    ${gutterBottom ? "margin-bottom: 10px" : ""};
    ${fontSize ? `font-size: ${fontSize}` : ""};
    ${fontWeight ? `font-weight: ${fontWeight}` : ""};
    ${transform ? `text-transform: ${transform}` : ""};
    ${fontStyle ? `font-style: ${fontStyle}` : ""};
    ${textAlign ? `text-align: ${textAlign}` : ""};
  `;
}

function getColor(color: Props["color"]) {
  switch (color) {
    case "primary":
      return "var(--primary)";
    case "secondary":
      return "var(--secondary)";
    default:
      return "var(--primary)";
  }
}
