import { buttonStyle } from "@/components/common/Button/Button.css";

interface ButtonProps {}

const Button = ({}: ButtonProps) => {
  return <button className={buttonStyle}>Button</button>;
};

export default Button;
