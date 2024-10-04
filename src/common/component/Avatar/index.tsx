import { avatarStyle, wrapperStyle } from "@/common/component/Avatar/index.css";
import { clsx } from "clsx";
import Image, { type ImageProps } from "next/image";

interface AvatarProps extends ImageProps {
  /** mini: '2.5rem'<br/>small: '3.9rem'<br/>medium: '8.2rem'<br/>large: '12rem' */
  size?: "mini" | "small" | "medium" | "large";
  /** 보라색 그림자 표시 여부 */
  hasShadow?: boolean;
}

const Avatar = ({
  className,
  size = "medium",
  hasShadow = false,
  children,
  ...imageProps
}: AvatarProps) => {
  return (
    <div className={clsx(wrapperStyle, className)}>
      <Image
        {...imageProps}
        role="button"
        className={avatarStyle({ size, hasShadow })}
      />
      {children}
    </div>
  );
};

export default Avatar;
