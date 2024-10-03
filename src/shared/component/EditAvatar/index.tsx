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
  onImageChange: (image: string) => void;
}

const EditAvatar = ({
  src = "",
  alt = "프로필 사진 수정",
  onImageChange,
  ...props
}: EditAvatarProps) => {
  const [pickedImage, setPickedImage] = useState<string | null>(src || null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPickedImage(src);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
      onImageChange(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <Avatar src={pickedImage || defaultImg} alt={alt} size="large" {...props}>
      <label htmlFor="edit-avatar">
        <IcnEditProfile className={iconStyle} />
      </label>
      <input
        className={inputStyle}
        type="file"
        id="edit-avatar"
        accept="image/*"
        onChange={handleImageChange}
      />
    </Avatar>
  );
};

export default EditAvatar;
