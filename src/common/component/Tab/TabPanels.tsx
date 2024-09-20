import { useTabState } from "@/common/component/Tab/TabProvider";
import { Children, type ComponentPropsWithoutRef } from "react";

type TabPanelsProps = ComponentPropsWithoutRef<"div">;

const TabPanels = ({ children, ...props }: TabPanelsProps) => {
  const { selectedTabId } = useTabState();

  return (
    <div role="tabpanel" {...props}>
      {Children.toArray(children).map((panel, idx) => {
        if (idx + 1 === selectedTabId || idx + 1 === +selectedTabId) {
          return <>{panel}</>;
        }
      })}
    </div>
  );
};

export default TabPanels;
