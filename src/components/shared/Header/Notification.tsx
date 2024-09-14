import { IcnBellHeader } from "@/assets/svgs";
import { countStyle, iconStyle, notificationContainer } from "./Header.css";

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
