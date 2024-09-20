import type { PropsWithChildren } from "react";
import { introTextStyle } from "./index.css";

const Text = ({ children }: PropsWithChildren) => {
  return <p className={introTextStyle()}>{children}</p>;
};

Text.Em = ({ children }: PropsWithChildren) => {
  return <em className={introTextStyle({ color: "purple" })}>{children}</em>;
};

Text.Alphabet = ({ children }: PropsWithChildren) => {
  return (
    <span className={introTextStyle({ spacing: "alphabet" })}>{children}</span>
  );
};

export default Text;
