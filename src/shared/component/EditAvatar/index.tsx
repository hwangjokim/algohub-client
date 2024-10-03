"use client";
// TODO: 현재 임시 defaultImg임 (확정 아직 X)
import defaultImg from "@/asset/img/alogohub_icon.png";
import { IcnEditProfile } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { iconStyle, inputStyle } from "@/shared/component/EditAvatar/index.css";
import type { ImageProps } from "next/image";
import { type ChangeEvent, useRef, useState } from "react";

interface EditAvatarProps extends Omit<ImageProps, "src" | "alt"> {
  src?: string;
  alt?: string;
}

const EditAvatar = ({
  src = "undefined",
  alt = "프로필 사진 수정",
  ...props
}: EditAvatarProps) => {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handlePickClick = () => {
    if (imageInputRef?.current) imageInputRef.current.click();
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <Avatar src={pickedImage || defaultImg} alt={alt} size="large" {...props}>
      <IcnEditProfile className={iconStyle} onClick={handlePickClick} />
      <input
        className={inputStyle}
        type="file"
        id="editAvatar"
        accept="image/*"
        ref={imageInputRef}
        onChange={handleImageChange}
      />
    </Avatar>
  );
};

export default EditAvatar;
