import { IcnBellHeader } from "@/asset/svg";
import AlarmListItem from "@/common/component/AlarmListItem";
import {
  countStyle,
  notificationContainer,
  ulStyle,
} from "@/shared/component/Header/Notification.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import { notifications } from "@/shared/constant/example";

const Notification = () => {
  return (
    <div id="notification" className={notificationContainer} aria-labelledby="notification-toggle">
      <ul className={ulStyle} role="list" aria-label="알림 목록" tabIndex={undefined}>
        {notifications.map((notification, index) => (
          <AlarmListItem
            key={index}
            name={notification.name}
            message={notification.message}
            date={notification.date}
            profileImg={notification.profileImg}
            handleClick={() => {alert("click")}}
          />
        ))}
      </ul>
    </div>
  );
};

type TriggerIconProps = {
  count: number;
};

Notification.TriggerIcon = ({ count }: TriggerIconProps) => {
  return (
    <>
      {count > 0 && <div aria-live="polite" className={countStyle}>{count}</div>}
      <IcnBellHeader className={iconStyle} />
    </>
  );
};

export default Notification;
