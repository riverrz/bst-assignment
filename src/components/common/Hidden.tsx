import React from "react";

interface Props {
  smDown?: boolean; // if screen size is smaller tham sm then hide the children
  smUp?: boolean;
  children?: any;
}

export function Hidden(props: Props) {
  const { smDown, smUp, children } = props;

  if (smDown !== undefined && isSM) {
    return null;
  }

  if (smUp !== undefined && !isSM) {
    return null;
  }

  return children;
}

const isSM = window.matchMedia("(max-width: 768px)").matches;
