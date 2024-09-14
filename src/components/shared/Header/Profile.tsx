import IcnNew from "@/assets/svgs/icn_new.svg?url";
import Image from "next/image";
import {
  iconStyle,
  profileMenuContainer,
  profileMenuItemStyle,
} from "./Header.css";
const Profile = () => {
  return (
    <nav
      className={profileMenuContainer}
      id="profile"
      aria-label="profile"
      role="menu"
    >
      <button className={profileMenuItemStyle} role="menuitem">
        내 프로필
      </button>
      <button className={profileMenuItemStyle} role="menuitem">
        로그아웃
      </button>
    </nav>
  );
};

Profile.TriggerIcon = () => (
  <Image className={iconStyle} src={IcnNew} alt="user profile" priority />
);

export default Profile;
