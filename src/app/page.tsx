"use client";
import Animation from "@/common/component/Animation";
import Calendar from "@/common/component/Calendar";
import ToggleButton from "@/common/component/ToggleButton";
import "@/styles/globalStyles.css";

const OnboardingPage = () => {
  return (
    <div>
      OnboardingPage
      <Animation size={""} animationJson={undefined} />
      <ToggleButton isSelected={false} onChange={() => {}} />
      <Calendar startDate={new Date("2022-10-11")} onChange={() => {}} />
    </div>
  );
};

export default OnboardingPage;
