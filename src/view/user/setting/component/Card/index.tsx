import type React from "react";
import type { PropsWithChildren } from "react";
import { cardStyle } from "./index.css";

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {}

const Card = ({ children, ...props }: CardProps) => {
  return (
    <div className={cardStyle} {...props}>
      {children}
    </div>
  );
};

export default Card;
