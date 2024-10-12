import type { GroupInfoResponse } from "@/api/group/type";
import CircleNumber from "@/view/group/dashboard/component/GroupSidebar/CircleNumber";
import GroupCard from "@/view/group/dashboard/component/GroupSidebar/GroupCard";
import {
  labelStyle,
  labelWrapper,
  memberWrapper,
  sidebarWrapper,
} from "@/view/group/dashboard/component/GroupSidebar/index.css";
import MemberAvatar from "@/view/group/index/component/MemberAvatar";

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
        {[0, 1, 2, 3, 4].map((_elem, idx) => (
          <MemberAvatar key={idx} src="" isLeader />
        ))}
      </div>
      <div className={labelWrapper}>
        <p className={labelStyle}>스터디 멤버</p>
        <CircleNumber>10</CircleNumber>
      </div>
      <div className={memberWrapper}>
        {[0, 1, 2].map((_elem, idx) => (
          <MemberAvatar key={idx} src="" />
        ))}
      </div>
    </div>
  );
};

export default GroupSidebar;
