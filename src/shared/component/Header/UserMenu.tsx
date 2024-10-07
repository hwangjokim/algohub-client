"use client";

import Menu from "@/common/component/Menu/Menu";
import Profile from "@/shared/component/Header/Profile";
import { buttonContainer } from "@/shared/component/Header/index.css";
import LoginMenu from "../../../view/onboarding/component/LoginMenu/LoginMenu";
import Alarm from "./Alarm/Alarm";

const UserMenu = () => {
  /* TODO: 로그인 api 부착 후 Atom으로 교체 */
  // const { isLoggedIn } = useAtomValue(authAtom);
  const isLoggedIn = false;
  // TODO: 알림 기능 구현 시 수정
  const count = 10;

  if (!isLoggedIn) return <LoginMenu />;
  return (
    <div className={buttonContainer}>
      <Menu
        label="alarm"
        renderTriggerButton={<Alarm.TriggerButton count={count} />}
        renderList={<Alarm />}
      />

      <Menu
        label="profileMenu"
        renderTriggerButton={<Profile.TriggerButton />}
        renderList={<Profile />}
      />
    </div>
  );
};

export default UserMenu;
