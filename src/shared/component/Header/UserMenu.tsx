import Alarm from "@/shared/component/Header/Alarm";
import Menu from "@/shared/component/Header/Menu";
import Profile from "@/shared/component/Header/Profile";
import { buttonContainer } from "@/shared/component/Header/index.css";

const UserMenu = () => {
  // TODO: 알림 기능 구현 시 수정
  const count = 10;

  return (
    <div className={buttonContainer}>
      <Menu
        label="alarm"
        renderTriggerIcon={<Alarm.TriggerIcon count={count} />}
        renderList={<Alarm />}
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
