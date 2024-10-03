"use client";

import { useTabState } from "@/common/component/Tab/TabProvider";
import { Children, type PropsWithChildren } from "react";

type TabPanelsProps = PropsWithChildren;

const TabPanels = ({ children }: TabPanelsProps) => {
  const { selectedTabId } = useTabState();

  return (
    <>
      {Children.toArray(children).map((panel, idx) => {
        if (idx + 1 === +selectedTabId) {
          return (
            <section
              role="tabpanel"
              id={`tabpanel-${idx + 1}`}
              aria-labelledby={`tab-${idx + 1}`}
            >
              {panel}
            </section>
          );
        }
      })}
    </>
  );
};

export default TabPanels;
