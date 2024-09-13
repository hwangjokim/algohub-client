import { IcnUser2 } from "@/assets/svgs";
import Avatar from "@/components/common/Avatar";
import { iconStyle } from "@/components/group/MemberAvatar/index.css";
import type { StaticImageData } from "next/image";

interface MemberAvatarProps {
  isLeader: boolean;
  src: StaticImageData;
}
const MemberAvatar = ({ isLeader, src }: MemberAvatarProps) => {
  return (
    <Avatar src={src} size="small" isShadow>
      {isLeader && <IcnUser2 className={iconStyle} />}
    </Avatar>
  );
};

export default MemberAvatar;
