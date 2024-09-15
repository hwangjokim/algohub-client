import { IcnBellHeader } from "@/asset/svgs";
import { countStyle, notificationContainer } from "./Notification.css";
import { iconStyle } from "./index.css";

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
