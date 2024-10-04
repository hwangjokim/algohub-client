import { IcnCalenderCard } from "@/asset/svg";
import {
  groupDateInfoWrapper,
  groupDateStyle,
} from "@/view/user/join-group/component/GroupInfoCard/GroupDateInfo.css";

interface GroupDateInfoProps {
  startDate: string;
  endDate: string;
}
const GroupDateInfo = ({ startDate, endDate }: GroupDateInfoProps) => {
  return (
    <section className={groupDateInfoWrapper}>
      <IcnCalenderCard width={20} height={20} />
      <span className={groupDateStyle}>{startDate}</span>
      <span className={groupDateStyle}>~</span>
      <span className={groupDateStyle}>{endDate}</span>
    </section>
  );
};

export default GroupDateInfo;
