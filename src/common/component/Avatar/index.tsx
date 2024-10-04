import { avatarStyle, wrapperStyle } from "@/common/component/Avatar/index.css";
import Image, { type ImageProps } from "next/image";

interface AvatarProps extends ImageProps {
  size?: "mini" | "small" | "medium" | "large";
  hasShadow?: boolean;
}

const Avatar = ({
  size = "medium",
  hasShadow = false,
  children,
  ...imageProps
}: AvatarProps) => {
  return (
    <div className={wrapperStyle}>
      <Image
        {...imageProps}
        width="100"
        height="100"
        role="button"
        className={avatarStyle({ size, hasShadow })}
      />
      {children}
    </div>
  );
};

export default Avatar;
