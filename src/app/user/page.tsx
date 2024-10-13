import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";
import UserCard from "@/view/user/index/UserCard";
import { userCardWrapper } from "@/view/user/index/UserCard/index.css";

const UserDashboardPage = () => {
  return (
    <div className={sidebarWrapper}>
      <Sidebar>
        <div className={userCardWrapper}>
          <UserCard />
        </div>
      </Sidebar>
      {/* children */}
    </div>
  );
};

export default UserDashboardPage;
