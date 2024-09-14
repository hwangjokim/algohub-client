import {
  avatarStyle,
  imageStyle,
  wrapperStyle,
} from "@/components/common/Avatar/index.css";
import Image, { type ImageProps } from "next/image";

interface AvatarProps extends ImageProps {
  size?: "mini" | "small" | "medium" | "large";
  hasShadow?: boolean;
  handleClick?: () => void;
}

const Avatar = ({
  size = "medium",
  hasShadow = false,
  handleClick,
  children,
  ...imageProps
}: AvatarProps) => {
  return (
    <div className={wrapperStyle}>
      <button
        type="button"
        className={avatarStyle({ size, hasShadow })}
        onClick={handleClick}
      >
        <Image {...imageProps} alt="프로필 이미지" className={imageStyle} />
      </button>
      {children}
    </div>
  );
};

export default Avatar;
