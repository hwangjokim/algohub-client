"use client"
import Animation from "@/common/component/Animation";
import ToggleButton from "@/common/component/ToggleButton";
import "@/styles/globalStyles.css";

const OnboardingPage = () => {
  return (
    <div>
      OnboardingPage
      <Animation size={""} animationJson={undefined} />
      <ToggleButton isSelected={false} onChange={() => {}} />
    </div>
  );
};

export default OnboardingPage;
