import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import UserCard from "@/view/user/index/component/UserCard";

const UserDashboardPage = () => {
  return (
    <div className={sidebarWrapper}>
      <Sidebar>
        <UserCard />
      </Sidebar>
      {/* children */}
    </div>
  );
};

export default UserDashboardPage;
