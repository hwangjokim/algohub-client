import { IcnUser3 } from "@/asset/svg";
import { chipWrapper } from "@/view/group/dashboard/component/GroupSidebar/GroupCard/index.css";

type RoleChipProps = {
  isLeader?: boolean;
};
const RoleChip = ({ isLeader }: RoleChipProps) => {
  return (
    <div className={chipWrapper}>
      <IcnUser3 width={9} height={13} />
      {isLeader ? "스터디장" : "스터디원"}
    </div>
  );
};

export default RoleChip;
