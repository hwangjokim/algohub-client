import tmpSrc from "@/asset/img/alogohub_icon.png";
import { IcnGroupInfoCard } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import type { GroupJoinResponse } from "@/view/user/join-group/api/type";
import GroupDateInfo from "@/view/user/join-group/component/GroupInfoCard/GroupDateInfo";
import {
  descStyle,
  groupNameStyle,
  infoCardWrapper,
  infoWrapper,
} from "@/view/user/join-group/component/GroupInfoCard/index.css";

const GroupInfoCard = ({ groupInfo }: { groupInfo: GroupJoinResponse }) => {
  return (
    <section className={infoCardWrapper}>
      <IcnGroupInfoCard width={246} height={341} />
      <section className={infoWrapper}>
        <Avatar src={tmpSrc} alt={`${groupInfo.name} 그룹 사진`} size="large" />
        <p className={groupNameStyle}>{groupInfo.name}</p>
        <GroupDateInfo
          startDate={groupInfo.startDate}
          endDate={groupInfo.endDate}
        />
        <p className={descStyle}>{groupInfo.description}</p>
      </section>
    </section>
  );
};

export default GroupInfoCard;
