import type { GroupInfoResponse } from "@/api/group/type";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/component/GroupSidebar";

export const tmpGroupData: GroupInfoResponse = {
  id: 0,
  name: "숭실대학교 알고리즘 스터디",
  startDate: "2024.08.13",
  endDate: "2024.09.13",
  introduction:
    "BE Developer로 성장하고 싶은 숭실대학교 학생들이 푸는 알고리즘 스터디입니다",
  groupImage: "",
  isOwner: true,
  ownerNickname: "jnary",
};

const GroupDashboardPage = () => {
  return (
    <div className={sidebarWrapper}>
      <Sidebar>
        <GroupSidebar info={tmpGroupData} />
      </Sidebar>
      {/* children */}
    </div>
  );
};

export default GroupDashboardPage;
