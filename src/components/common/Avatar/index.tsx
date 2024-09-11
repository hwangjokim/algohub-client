import { IcnUser2 } from "@/assets/svgs";
import {
  avatarStyle,
  iconStyle,
  imageStyle,
  wrapperStyle,
} from "@/components/common/Avatar/index.css";
import Image, { type StaticImageData } from "next/image";

interface AvatarProps {
  src: StaticImageData;
  alt: string;
  size?: "mini" | "small" | "medium" | "large";
  isShadow?: boolean;
  isGroupIc?: boolean;
  handleClick?: () => void;
}

const Avatar = ({
  src,
  alt,
  size = "medium",
  isShadow = false,
  isGroupIc = false,
  handleClick,
}: AvatarProps) => {
  return (
    <div className={wrapperStyle}>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={avatarStyle({ size: size, isShadow: isShadow })}
        onClick={handleClick}
      >
        <Image src={src} alt={alt} className={imageStyle} />
      </div>
      {isGroupIc && <IcnUser2 className={iconStyle} />}
    </div>
  );
};

export default Avatar;
