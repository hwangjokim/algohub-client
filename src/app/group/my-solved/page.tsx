import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";

const MySolvedPage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar />
      {/* children */}
    </main>
  );
};

export default MySolvedPage;
