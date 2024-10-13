import type { GroupInfoResponse } from "@/api/group/type";
import { IcnCalenderCard } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import RoleChip from "@/view/group/dashboard/GroupSidebar/GroupCard/RoleChip";
import {
  dateStyle,
  dateTextStyle,
  descStyle,
  nameStyle,
  wrapper,
} from "@/view/group/dashboard/GroupSidebar/GroupCard/index.css";

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
        <time className={dateTextStyle}>{startDate}</time>
        <p className={dateTextStyle}>~</p>
        <time className={dateTextStyle}>{endDate}</time>
      </div>
      <p className={descStyle}>{introduction}</p>
      <RoleChip isOwner={isOwner} />
    </article>
  );
};

export default GroupCard;
