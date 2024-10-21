import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import ProblemSidebar from "@/view/group/problem-list/ProblemSidebar";
import SolvedList from "@/view/group/problem-list/SolvedList";
import { contentWrapper } from "@/view/group/problem-list/index.css";

const ProblemListPage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <ProblemSidebar />
      </Sidebar>
      {/* children */}
      <div className={contentWrapper}>
        <SolvedList />
      </div>
    </main>
  );
};

export default ProblemListPage;
