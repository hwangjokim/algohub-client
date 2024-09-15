import { buttonContainer } from "@/shared/component/header/index.css";
import Menu from "@/shared/component/header/menu";
import Notification from "@/shared/component/header/notification";
import Profile from "@/shared/component/header/profile";

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
