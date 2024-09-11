import { avatarStyle, imageStyle } from "@/components/common/Avatar/index.css";
import Image, { type StaticImageData } from "next/image";

interface AvatarProps {
  src: StaticImageData;
  alt: string;
  size?: "mini" | "small" | "medium" | "large";
  isShadow?: boolean;
  handleClick?: () => void;
}

const Avatar = ({
  src,
  alt,
  size = "medium",
  isShadow = false,
  handleClick,
}: AvatarProps) => {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className={avatarStyle({ size: size, isShadow: isShadow })}
      onClick={handleClick}
    >
      <Image src={src} alt={alt} className={imageStyle} />
    </div>
  );
};

export default Avatar;
