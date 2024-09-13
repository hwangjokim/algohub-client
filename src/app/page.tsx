import avatarSrc from "@/assets/imgs/alogohub_icon.png";
import "@/styles/globalStyles.css";
import Avatar from "@/components/common/Avatar";
import MemberAvatar from "@/components/group/MemberAvatar";

export default function Home() {
  return (
    <div>
      <Avatar src={avatarSrc} size="small" isShadow />
      <Avatar src={avatarSrc} size="small" />
      <Avatar src={avatarSrc} size="medium" />
      <Avatar src={avatarSrc} size="large" />
      <Avatar src={avatarSrc} size="mini" isShadow />
      <Avatar src={avatarSrc} size="mini" />
      <MemberAvatar isLeader={true} src={avatarSrc} />
      <MemberAvatar isLeader={false} src={avatarSrc} />
    </div>
  );
}
