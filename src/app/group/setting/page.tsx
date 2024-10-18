import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import MemberList from "@/view/group/setting/MemberList";
import SettingSidebar from "@/view/group/setting/SettingSidebar";

const GroupSettingPage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <SettingSidebar />
      </Sidebar>
      <MemberList />
    </main>
  );
};

export default GroupSettingPage;
