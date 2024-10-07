import { flexStyle } from "@/common/component/Flex/index.css";

const Flex = (children: React.ReactNode) => {
  return <div className={flexStyle}>{children}</div>;
};

export default Flex;
