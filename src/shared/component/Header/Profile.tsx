import IcnNew from "@/asset/svg/icn_new.svg?url";
import Dropdown from "@/common/component/dropdown";
import { iconStyle } from "@/shared/component/header/index.css";
import { dropdownStyle } from "@/shared/component/header/profile.css";
import Image from "next/image";

const Profile = () => {
  return (
    <Dropdown label="profile" className={dropdownStyle}>
      <li>내 프로필</li>
      <li>로그아웃</li>
    </Dropdown>
  );
};

Profile.TriggerIcon = () => (
  <Image className={iconStyle} src={IcnNew} alt="user profile" priority />
);

export default Profile;
