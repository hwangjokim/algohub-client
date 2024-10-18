import EditAvatar from "@/shared/component/EditAvatar";
import { sidebarWrapper } from "@/view/group/setting/SettingSidebar/index.css";

const SettingSidebar = () => {
  return (
    <div className={sidebarWrapper}>
      <EditAvatar />
    </div>
  );
};

export default SettingSidebar;
