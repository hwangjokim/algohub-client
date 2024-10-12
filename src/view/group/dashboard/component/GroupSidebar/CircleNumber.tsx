import { circleNumberStyle } from "@/view/group/dashboard/component/GroupSidebar/index.css";
import type { PropsWithChildren } from "react";

const CircleNumber = ({ children }: PropsWithChildren) => {
  return <div className={circleNumberStyle}>{children}</div>;
};

export default CircleNumber;
