import { buttonStyle } from "@/components/common/Button/Button.css";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <button className={buttonStyle}>{text}</button>;
};

export default Button;
