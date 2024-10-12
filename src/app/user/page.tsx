import Sidebar from "@/common/component/Sidebar";
import { mainWrapper, sidebarWrapper } from "@/styles/shared.css";
import Ranking from "@/view/group/dashboard/component/Ranking";
import UserCard from "@/view/user/index/component/UserCard";
import { userCardWrapper } from "@/view/user/index/component/UserCard/index.css";

const UserDashboardPage = () => {
  return (
    <div className={sidebarWrapper}>
      <Sidebar>
        <div className={userCardWrapper}>
          <UserCard />
        </div>
      </Sidebar>
      <section className={mainWrapper}>
        <Ranking />
      </section>
    </div>
  );
};

export default UserDashboardPage;
