import Sidebar from "@/common/component/Sidebar";
import { tmpGroupData } from "@/shared/util/example";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/GroupSidebar";

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
