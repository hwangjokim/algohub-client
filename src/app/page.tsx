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
      <div>
        <Calendar
          // initialDate={new Date("2021-10-10")}
          onChange={(date: Date) => {
            console.log(date);
          }}
        />
      </div>
    </div>
  );
};

export default OnboardingPage;
