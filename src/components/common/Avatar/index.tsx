import {
  avatarStyle,
  imageStyle,
  wrapperStyle,
} from "@/components/common/Avatar/index.css";
import Image, { type StaticImageData } from "next/image";

interface AvatarProps {
  src: StaticImageData;
  size?: "mini" | "small" | "medium" | "large";
  isShadow?: boolean;
  handleClick?: () => void;
  children?: React.ReactNode;
}

const Avatar = ({
  src,
  size = "medium",
  isShadow = false,
  handleClick,
  children,
}: AvatarProps) => {
  return (
    <div className={wrapperStyle}>
      <button
        type="button"
        className={avatarStyle({ size: size, isShadow: isShadow })}
        onClick={handleClick}
      >
        <Image src={src} alt="프로필 이미지" className={imageStyle} />
      </button>
      {children}
    </div>
  );
};

export default Avatar;
