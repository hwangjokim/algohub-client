import "@/styles/globalStyles.css";
import Sections from "@/view/onboarding/component/Section";
import { mainStyle } from "@/view/onboarding/component/Section/index.css";

const OnboardingPage = () => {
  return (
    <main className={mainStyle}>
      <Sections />
      {/* <Footer /> */}
    </main>
  );
};

export default OnboardingPage;
