import React, { useState } from "react";
import styled from "styled-components";
import { isMD, isSM, isXS } from "../../helpers";

interface Props {
  children?: React.ReactNode;
}

function CollapsibleCTAs(props: Props) {
  const { children } = props;
  const [showCollapsedSection, setShowCollapsedSection] = useState(false);
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
        <CollapseCTA
          tabIndex={0}
          onFocus={() => setShowCollapsedSection(true)}
          onBlur={() => setShowCollapsedSection(false)}
        >
          <img src="/assets/svg/three-dots-vertical.svg" alt="Collapsed ctas" />
          {showCollapsedSection && (
            <CollapseSection>{collapsedChildren}</CollapseSection>
          )}
        </CollapseCTA>
      )}
    </>
  );
}

const CollapseCTA = styled.div`
  cursor: pointer;
  position: relative;
  outline: none;
  padding: 1rem;
  border-radius: 50%;
`;

const CollapseSection = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  z-index: 2;
  background-color: #eee;
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
