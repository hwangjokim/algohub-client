import { buttonStyle } from "@/components/common/Button/Button.css";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <div className={buttonStyle}>{text}</div>;
};

export default Button;
