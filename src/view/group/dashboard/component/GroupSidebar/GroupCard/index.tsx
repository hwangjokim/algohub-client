import type { GroupInfoResponse } from "@/api/group/type";
import { IcnCalenderCard } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import RoleChip from "@/view/group/dashboard/component/GroupSidebar/GroupCard/RoleChip";
import {
  dateStyle,
  descStyle,
  nameStyle,
  wrapper,
} from "@/view/group/dashboard/component/GroupSidebar/GroupCard/index.css";

type GroupCardProps = {
  info: GroupInfoResponse;
};
const GroupCard = ({ info }: GroupCardProps) => {
  const { groupImage, name, startDate, endDate, introduction, isOwner } = info;

  return (
    <article className={wrapper}>
      <Avatar src={groupImage} alt="Group Info Card" size="large" />
      <h1 className={nameStyle}>{name}</h1>
      <div className={dateStyle}>
        <IcnCalenderCard width={20} height={20} />
        <p>{startDate}</p>
        <p>~</p>
        <p>{endDate}</p>
      </div>
      <p className={descStyle}>{introduction}</p>
      <RoleChip isLeader={isOwner} />
    </article>
  );
};

export default GroupCard;
