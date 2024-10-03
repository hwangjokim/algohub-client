"use client";
import defaultImg from "@/asset/img/alogohub_icon.png";
import EditAvatar from "@/shared/component/EditAvatar";
import Image from "next/image";
import { useState } from "react";

const OnboardingPage = () => {
  const [profileImage, setProfileImage] = useState(defaultImg);
  const handleImageChange = (image: string) => {
    setProfileImage(image);
  };

  return (
    <div>
      OnboardingPage
      <EditAvatar src={profileImage} onImageChange={handleImageChange} />
    </div>
  );
};

export default OnboardingPage;
