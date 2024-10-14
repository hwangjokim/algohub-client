import type { PropsWithChildren } from "react";
import { containerStyle } from "./index.css";

interface ContainerProps extends PropsWithChildren {}

const Container = ({ children }: ContainerProps) => {
  return <div className={containerStyle}>{children}</div>;
};

export default Container;
