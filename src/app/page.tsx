import avatarSrc from "@/assets/imgs/alogohub_icon.png";
import "@/styles/globalStyles.css";
import Avatar from "@/components/common/Avatar";

export default function Home() {
  return (
    <div>
      <Avatar src={avatarSrc} alt="algoHub 로고" size="small" />
      <Avatar src={avatarSrc} alt="algoHub 로고" size="medium" />
      <Avatar src={avatarSrc} alt="algoHub 로고" size="large" />
      <Avatar src={avatarSrc} alt="algoHub 로고" size="mini" isShadow />
      <Avatar src={avatarSrc} alt="algoHub 로고" size="mini" />
    </div>
  );
}
