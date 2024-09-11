import { IcnAlarm } from "@/assets/svgs";
import AlarmUrl from "@/assets/svgs/icn_alarm.svg?url";
import Button from "@/components/common/Button/Button";
import { themeClass } from "@/styles/themes.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={themeClass}>
      <IcnAlarm width={50} height={50} />
      <Image width={50} height={50} src={AlarmUrl} alt="alarm" priority />
      <img width={50} height={50} src={AlarmUrl.src} alt="alarm" />
      <div
        style={{
          width: 50,
          height: 50,
          backgroundImage: `url(${AlarmUrl.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <Button text="버튼" />
    </div>
  );
}
