import type { GroupStatus } from "@/api/user/type";
import Sidebar from "@/common/component/Sidebar";
import { tmpUserGroupListData } from "@/shared/util/example";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupCard from "@/view/user/index/GroupCard";
import UserCard from "@/view/user/index/UserCard";
import { userCardWrapper } from "@/view/user/index/UserCard/index.css";
import { GROUP_STATUS_MAPPING } from "@/view/user/index/constant";
import {
  groupLabelStyle,
  userDashboardWrapper,
} from "@/view/user/index/index.css";

const UserDashboardPage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <div className={userCardWrapper}>
          <UserCard />
        </div>
      </Sidebar>
      <div className={userDashboardWrapper}>
        {GROUP_STATUS_MAPPING.map((list) => (
          <section key={list.status}>
            <h2 className={groupLabelStyle}>{list.label}</h2>
            {tmpUserGroupListData[list.status as GroupStatus].map((item) => (
              <GroupCard
                key={item.id}
                item={item}
                status={list.status as GroupStatus}
              />
            ))}
          </section>
        ))}
      </div>
    </main>
  );
};

export default UserDashboardPage;
