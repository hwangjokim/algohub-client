import type { GroupListItem, GroupStatus } from "@/api/user/type";
import defaultImg from "@/asset/img/alogohub_icon.png";
import { IcnCalenderCard, IcnUser, IcnUser2 } from "@/asset/svg";
import StatusIcon from "@/view/user/index/GroupCard/StatusIcon";
// import StatusIcon from "@/view/user/index/GroupCard/StatusIcon";
import {
  dateStyle,
  groupCardWrapper,
  imgStyle,
  nameStyle,
  nameWrapper,
  ownerStyle,
} from "@/view/user/index/GroupCard/index.css";
import Image from "next/image";
import type { HTMLAttributes } from "react";

interface GroupCardProps extends HTMLAttributes<HTMLDivElement> {
  item: GroupListItem;
  status: GroupStatus;
}
const GroupCard = ({ item, status, ...divProps }: GroupCardProps) => {
  const { name, groupImage, startDate, endDate, ownerNickname } = item;
  const isDone = status === "done";

  return (
    <article className={groupCardWrapper({ isDone })} {...divProps}>
      <Image src={groupImage || defaultImg} alt={""} className={imgStyle} />
      <div className={nameWrapper}>
        <StatusIcon status={status} />
        <h1 className={nameStyle}>{name}</h1>
      </div>
      <div className={dateStyle}>
        <IcnCalenderCard width={20} height={20} />
        <p>{startDate}</p>
        <p>~</p>
        <p>{endDate}</p>
      </div>
      <div className={ownerStyle}>
        {isDone ? (
          <IcnUser2 width={10} height={14.5} />
        ) : (
          <IcnUser width={10} height={14.5} />
        )}
        <p>{ownerNickname}</p>
      </div>
    </article>
  );
};

export default GroupCard;
