"use client";

import Menu from "@/common/component/Menu/Menu";
import Alarm from "@/shared/component/Header/Alarm";
import Profile from "@/shared/component/Header/Profile";
import { buttonContainer } from "@/shared/component/Header/index.css";

const UserMenu = () => {
  // TODO: 알림 기능 구현 시 수정
  const count = 10;

  return (
    <div className={buttonContainer}>
      <Menu
        label="alarm"
        renderTriggerButton={(props) => (
          <Alarm.TriggerButton {...props} count={count} />
        )}
        renderList={<Alarm />}
      />

      <Menu
        label="profileMenu"
        renderTriggerButton={(props) => <Profile.TriggerButton {...props} />}
        renderList={<Profile />}
      />
    </div>
  );
};

export default UserMenu;
