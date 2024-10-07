import { flexStyle } from "@/common/component/Flex/index.css";
import { clsx } from "clsx";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {}
const Flex = ({ children, className, ...props }: FlexProps) => {
  return (
    <div className={clsx(flexStyle, className)} {...props}>
      {children}
    </div>
  );
};

export default Flex;
