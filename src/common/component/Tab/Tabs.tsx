import TabProvider from "@/common/component/Tab/TabProvider";
import { tabContainerStyle } from "@/common/component/Tab/index.css";
import type { ElementType, HTMLAttributes } from "react";

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tag?: ElementType;
  variant?: "primary" | "secondary";
}

const Tabs = ({ tag = "div", variant = "primary", children }: TabsProps) => {
  const Tag = tag;

  return (
    <TabProvider variant={variant}>
      <Tag className={tabContainerStyle}>{children}</Tag>
    </TabProvider>
  );
};

export default Tabs;
