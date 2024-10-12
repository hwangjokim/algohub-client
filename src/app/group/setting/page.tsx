import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";

const GroupSettingPage = () => {
  return (
    <div className={sidebarWrapper}>
      <Sidebar />
      {/* children */}
    </div>
  );
};

export default GroupSettingPage;
