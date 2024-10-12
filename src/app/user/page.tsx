import Sidebar from "@/common/component/Sidebar";
import UserCard from "@/view/user/index/component/UserCard";

const UserDashboardPage = () => {
  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      <Sidebar>
        <UserCard />
      </Sidebar>
    </div>
  );
};

export default UserDashboardPage;
