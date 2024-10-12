import { IcnUser2 } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { iconStyle } from "@/view/group/dashboard/component/GroupSidebar/index.css";
import type { ImageProps } from "next/image";

const ShadowAvatar = ({ alt, ...props }: Omit<ImageProps, "src">) => {
  return (
    <Avatar src="" alt={alt} size="small" hasShadow {...props}>
      {true && <IcnUser2 className={iconStyle} width={9} height={13} />}
    </Avatar>
  );
};

export default ShadowAvatar;
