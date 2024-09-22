import "@/styles/globalStyles.css";
import MainWithFooter from "@/view/onboarding/component/Section";
import Section1 from "@/view/onboarding/component/Section/Section1";
import Section2 from "@/view/onboarding/component/Section/Section2";
import Section3 from "@/view/onboarding/component/Section/Section3";

const OnboardingPage = () => {
  return (
    <MainWithFooter>
      <Section1 />
      <Section2 />
      <Section3 />
    </MainWithFooter>
  );
};

export default OnboardingPage;
