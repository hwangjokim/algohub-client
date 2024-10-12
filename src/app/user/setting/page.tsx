"use client";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import SettingStep from "@/view/user/setting/component/SettingStep";
import type { SettingSteps } from "@/view/user/setting/type";
import { useState } from "react";

const UserSettingPage = () => {
  const [step, setStep] = useState<SettingSteps>("my-profile");
  return (
    <div className={sidebarWrapper}>
      <Sidebar>
        <SettingStep step={step} setStep={setStep} />
      </Sidebar>
      {/* children */}
    </div>
  );
};

export default UserSettingPage;
