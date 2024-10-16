import type { GroupListItem, GroupStatus } from "@/api/user/type";
import defaultImg from "@/asset/img/img_card_profile.png";
import { IcnCalenderCard, IcnUser, IcnUser2 } from "@/asset/svg";
import StatusIcon from "@/view/user/index/GroupCard/StatusIcon";
// import StatusIcon from "@/view/user/index/GroupCard/StatusIcon";
import {
  dateStyle,
  descStyle,
  groupCardWrapper,
  imgStyle,
  nameStyle,
  nameWrapper,
  ownerStyle,
} from "@/view/user/index/GroupCard/index.css";
import Image from "next/image";
import type { HTMLAttributes } from "react";

interface GroupCardProps extends HTMLAttributes<HTMLButtonElement> {
  item: GroupListItem;
  status: GroupStatus;
}
const GroupCard = ({ item, status, ...btnProps }: GroupCardProps) => {
  const { name, groupImage, startDate, endDate, ownerNickname } = item;
  const isDone = status === "done";

  return (
    <button className={groupCardWrapper} disabled={isDone} {...btnProps}>
      <article>
        <Image src={groupImage || defaultImg} alt={""} className={imgStyle} />
        <div className={nameWrapper}>
          <StatusIcon status={status} />
          <h1 className={nameStyle({ isDone })}>{name}</h1>
        </div>
        <div className={dateStyle({ isDone })}>
          <IcnCalenderCard width={20} height={20} />
          <time className={descStyle({ isDone })}>{startDate}</time>
          <p className={descStyle({ isDone })}>~</p>
          <time className={descStyle({ isDone })}>{endDate}</time>
        </div>
        <div className={ownerStyle}>
          {isDone ? (
            <IcnUser2 width={10} height={14.5} />
          ) : (
            <IcnUser width={10} height={14.5} />
          )}
          <p className={descStyle({ isDone })}>{ownerNickname}</p>
        </div>
      </article>
    </button>
  );
};

export default GroupCard;
