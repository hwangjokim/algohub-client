import { arrow, exitGroup, requireLogin } from "@/assets/lottie";
import { IcnAlarm } from "@/assets/svgs";
import AlarmUrl from "@/assets/svgs/icn_alarm.svg?url";
import Animation from "@/components/shared/animation/Animation";
import Image from "next/image";

export default function Home() {
	return (
		<div className="text-purple">
			<Animation size="100px" loop={false} animationJson={exitGroup} />
			<Animation size="100px" animationJson={arrow} />
			<Animation size="100px" animationJson={requireLogin} />
			<IcnAlarm width={50} height={50} />
			<Image width={50} height={50} src={AlarmUrl} alt="alarm" priority />
		</div>
	);
}
