import type { GroupInfoResponse } from "@/api/group/type";
import CircleNumber from "@/view/group/dashboard/component/GroupSidebar/CircleNumber";
import GroupCard from "@/view/group/dashboard/component/GroupSidebar/GroupCard";
import ShadowAvatar from "@/view/group/dashboard/component/GroupSidebar/ShadowAvatar";
import {
  labelStyle,
  labelWrapper,
  memberWrapper,
  sidebarWrapper,
} from "@/view/group/dashboard/component/GroupSidebar/index.css";

type GroupCardProps = {
  info: GroupInfoResponse;
};

const GroupSidebar = ({ info }: GroupCardProps) => {
  return (
    <div className={sidebarWrapper}>
      <GroupCard info={info} />
      <div className={labelWrapper}>
        <p className={labelStyle}>스터디장</p>
        <CircleNumber>3</CircleNumber>
      </div>
      <div className={memberWrapper}>
        {[0, 1, 2, 3, 4].map((elem, idx) => (
          <ShadowAvatar key={idx} alt={`${elem} 프로필 사진`} />
        ))}
      </div>
      <div className={labelWrapper}>
        <p className={labelStyle}>스터디 멤버</p>
        <CircleNumber>10</CircleNumber>
      </div>
      <div className={memberWrapper}>
        {[0, 1, 2].map((elem, idx) => (
          <ShadowAvatar key={idx} alt={`${elem} 프로필 사진`} />
        ))}
      </div>
    </div>
  );
};

export default GroupSidebar;
