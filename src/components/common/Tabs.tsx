import React, { useState, useLayoutEffect, useCallback } from "react";

interface Props {
  activeTab?: string;
  onChange?: (eventKey: string) => void;
  children?: React.ReactNode;
}

function Tabs(props: Props) {
  const [currentlyActiveTab, setCurrentlyActiveTab] = useState("");

  const { onChange, activeTab, children } = props;

  useLayoutEffect(() => {
    if (activeTab !== undefined && currentlyActiveTab !== activeTab) {
      setCurrentlyActiveTab(activeTab);
    }
  }, [activeTab, currentlyActiveTab]);

  const handleTabChange = useCallback(
    (eventKey: string) => {
      if (onChange) {
        return onChange(eventKey);
      }
      setCurrentlyActiveTab(eventKey);
    },
    [onChange]
  );

  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const isActive = child.props.eventKey === currentlyActiveTab;
    return React.cloneElement(child, {
      isActive,
      onClick: handleTabChange,
    });
  });
}
export default Tabs;
