import { arrow, exitGroup, requireLogin } from "@/assets/lottie";
import { IcnAlarm } from "@/assets/svgs";
import AlarmUrl from "@/assets/svgs/icn_alarm.svg?url";
import Image from "next/image";
import "@/styles/globalStyles.css";

export default function Home() {
  return (
    <div>
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
