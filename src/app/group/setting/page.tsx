import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import SettingSidebar from "@/view/group/setting/SettingSidebar";

const GroupSettingPage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <SettingSidebar />
      </Sidebar>
      {/* children */}
    </main>
  );
};

export default GroupSettingPage;
