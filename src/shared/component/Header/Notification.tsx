import { IcnBellHeader } from "@/asset/svg";
import {
  countStyle,
  notificationContainer,
} from "@/shared/component/header/Notification.css";
import { iconStyle } from "@/shared/component/header/index.css";

const Notification = () => {
  return (
    <ul id="notification" className={notificationContainer} role="alert" />
  );
};

type TriggerIconProps = {
  count: number;
};

Notification.TriggerIcon = ({ count }: TriggerIconProps) => {
  return (
    <>
      {count > 0 && <div className={countStyle}>{count}</div>}
      <IcnBellHeader className={iconStyle} />
    </>
  );
};

export default Notification;
