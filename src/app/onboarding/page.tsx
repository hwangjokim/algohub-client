import "@/styles/globalStyles.css";
import Footer from "@/view/onboarding/component/Footer";
import Section1 from "@/view/onboarding/component/Section1";
import Section2 from "@/view/onboarding/component/Section2";
import Section3 from "@/view/onboarding/component/Section3";

const OnboardingPage = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  );
};

export default OnboardingPage;
