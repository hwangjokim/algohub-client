"use client";

import { IcnEditProfile } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import {
  iconStyle,
  iconWrapper,
} from "@/shared/component/EditAvatar/index.css";
import Image, { StaticImageData } from "next/image";
import { ChangeEvent, useRef, useState } from "react";

interface EditAvatarProps {
  src: StaticImageData;
}

const EditAvatar = ({ src }: EditAvatarProps) => {
  const [imageFile, setImageFile] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement | null>(null);

  const handlePickClick = () => {
    if (imageInput.current) imageInput.current.click();
  };
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setImageFile(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageFile(fileReader.result + "");
    };
  };

  return (
    <>
      {/* <Avatar src={imageFile || src} size="large" alt="멤버 프로필"> */}
      <label className={iconWrapper} htmlFor="profile-image">
        <input
          type="file"
          id="profile-image"
          name="profile-image"
          accept="image/*"
          ref={imageInput}
          onChange={handleChangeImage}
          style={{ display: "none" }}
        />
        <IcnEditProfile
          className={iconStyle}
          type="button"
          onClick={handlePickClick}
        />
      </label>
      {/* </Avatar> */}
      <Image src={imageFile || src} alt="프로필 사진" />
    </>
  );
};

export default EditAvatar;
