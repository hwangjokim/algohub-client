import type { PropsWithChildren } from "react";
import Footer from "../Footer";
import { onboardingStyle } from "./index.css";

const MainWithFooter = ({ children }: PropsWithChildren) => {
  return (
    <div className={onboardingStyle}>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainWithFooter;
