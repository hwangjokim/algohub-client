"use client";
import Sidebar from "@/common/component/Sidebar";
import SettingStep from "@/view/user/setting/component/SettingStep";
import type { SettingSteps } from "@/view/user/setting/type";
import { useState } from "react";

const UserSettingPage = () => {
  const [step, setStep] = useState<SettingSteps>("my-profile");
  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      <Sidebar>
        <SettingStep step={step} setStep={setStep} />
      </Sidebar>
    </div>
  );
};

export default UserSettingPage;
