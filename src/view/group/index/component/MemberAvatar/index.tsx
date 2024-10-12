import { IcnUser2 } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { iconStyle } from "@/shared/component/Header/index.css";

interface MemberAvatarProps {
  isLeader?: boolean;
  src: string;
}
const MemberAvatar = ({ isLeader = false, src }: MemberAvatarProps) => {
  return (
    <Avatar src={src} size="small" hasShadow alt="멤버 프로필">
      {isLeader && <IcnUser2 className={iconStyle} />}
    </Avatar>
  );
};

export default MemberAvatar;
