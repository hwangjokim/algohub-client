import { IcnUser2 } from "@/asset/svg";
import Avatar from "@/common/component/avatar";
import { iconStyle } from "@/shared/component/Header/index.css";
import type { StaticImageData } from "next/image";

interface MemberAvatarProps {
  isLeader: boolean;
  src: StaticImageData;
}
const MemberAvatar = ({ isLeader, src }: MemberAvatarProps) => {
  return (
    <Avatar src={src} size="small" hasShadow alt="멤버 프로필">
      {isLeader && <IcnUser2 className={iconStyle} />}
    </Avatar>
  );
};

export default MemberAvatar;
