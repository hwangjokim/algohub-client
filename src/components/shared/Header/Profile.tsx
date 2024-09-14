import IcnNew from "@/assets/svgs/icn_new.svg?url";
import Dropdown from "@/components/common/Dropdown";
import Image from "next/image";
import { dropdownStyle } from "./Profile.css";
import { iconStyle } from "./index.css";

const Profile = () => {
  return (
    <Dropdown label="profile" className={dropdownStyle}>
      <button>내 프로필</button>
      <button>로그아웃</button>
    </Dropdown>
  );
};

Profile.TriggerIcon = () => (
  <Image className={iconStyle} src={IcnNew} alt="user profile" priority />
);

export default Profile;
