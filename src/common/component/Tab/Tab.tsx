"use client";

import Indicator from "@/common/component/Tab/Indicator";
import {
  useTabDispatch,
  useTabState,
} from "@/common/component/Tab/TabProvider";
import { tabStyle, textStyle } from "@/common/component/Tab/index.css";
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  SVGProps,
} from "react";

interface TabProps extends ComponentPropsWithoutRef<"li"> {
  tabId: string | number;
  icon?: FunctionComponent<SVGProps<SVGElement>>;
}

const Tab = ({ tabId, icon, children, ...props }: TabProps) => {
  const { variant, selectedTabId } = useTabState();
  const dispatch = useTabDispatch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "Enter") {
      dispatch({ _TAG: "SetSelectedTab", tabId });
    }
  };

  const isSelected = selectedTabId === tabId;

  const IconElement = icon!;

  return (
    <li
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole:
      role="tab"
      id={`tab-${tabId}`}
      tabIndex={-1}
      aria-controls={`tabPanel-${tabId}`}
      aria-selected={isSelected}
      className={tabStyle({ isSelected, variant: variant })}
      onClick={() => dispatch({ _TAG: "SetSelectedTab", tabId })}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {icon && <IconElement />}
      <span className={textStyle({ variant })}>{children}</span>
      {isSelected && <Indicator />}
    </li>
  );
};

export default Tab;
