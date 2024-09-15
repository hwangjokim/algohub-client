import Menu from "@/shared/component/Header/Menu";
import Notification from "@/shared/component/Header/Notification";
import Profile from "@/shared/component/Header/Profile";
import { buttonContainer } from "@/shared/component/Header/index.css";

const UserMenu = () => {
  // TODO: 알림 기능 구현 시 수정
  const count = 10;

  return (
    <div className={buttonContainer}>
      <Menu
        label="notification"
        renderTriggerIcon={<Notification.TriggerIcon count={count} />}
        renderList={<Notification />}
      />

      <Menu
        label="profileMenu"
        renderTriggerIcon={<Profile.TriggerIcon />}
        renderList={<Profile />}
      />
    </div>
  );
};

export default UserMenu;
