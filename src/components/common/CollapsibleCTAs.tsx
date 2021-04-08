import React from "react";
import styled from "styled-components";
import { isMD, isSM, isXS } from "../../helpers";

interface Props {
  children?: React.ReactNode;
}

function CollapsibleCTAs(props: Props) {
  const { children } = props;
  const childrenToShow = getChildrenToShowByScreenSize();
  const noOfChildren = React.Children.count(children);
  const showCollapse = noOfChildren > childrenToShow;

  const childrenArray = React.Children.toArray(children);
  const visibleChildren = childrenArray.slice(0, childrenToShow);
  const collapsedChildren = childrenArray.slice(childrenToShow);

  return (
    <>
      {visibleChildren}
      {showCollapse && (
        <CollapseCTA>
          <img src="/assets/svg/three-dots-vertical" alt="Collapsed ctas" />
          <CollapseSection>{collapsedChildren}</CollapseSection>
        </CollapseCTA>
      )}
    </>
  );
}

const CollapseCTA = styled.div`
  cursor: pointer;
  position: relative;
`;

const CollapseSection = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  > * {
    padding: 1rem;
  }
`;

function getChildrenToShowByScreenSize() {
  if (isXS) {
    return 0;
  } else if (isSM) {
    return 1;
  } else if (isMD) {
    return 2;
  } else {
    return 4;
  }
}

export default React.memo(CollapsibleCTAs);
