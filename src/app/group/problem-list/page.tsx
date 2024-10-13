import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import ProblemSidebar from "@/view/group/index/ProblemSidebar";

const ProblemListPage = () => {
  const isOwner = true;
  return (
    <div className={sidebarWrapper}>
      <Sidebar>{isOwner ? <ProblemSidebar /> : <></>}</Sidebar>
      {/* children */}
    </div>
  );
};

export default ProblemListPage;
