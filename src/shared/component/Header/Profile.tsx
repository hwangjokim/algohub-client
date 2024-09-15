import IcnNew from "@/assets/svgs/icn_new.svg?url";
import Dropdown from "@/common/component/dropdown";
import Image from "next/image";
import { dropdownStyle } from "./Profile.css";
import { iconStyle } from "./index.css";

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
