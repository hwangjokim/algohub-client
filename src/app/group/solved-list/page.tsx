import { tmpGroupData } from "@/app/group/page";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupSidebar from "@/view/group/dashboard/component/GroupSidebar";

const SolvedListPage = () => {
  const isOwner = true;
  return (
    <div className={sidebarWrapper}>
      <Sidebar>
        {isOwner ? <></> : <GroupSidebar info={tmpGroupData} />}
      </Sidebar>
      {/* children */}
    </div>
  );
};

export default SolvedListPage;
