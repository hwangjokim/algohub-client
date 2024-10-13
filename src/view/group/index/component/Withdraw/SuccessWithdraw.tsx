import { exitGroup } from "@/asset/lottie";
import Animation from "@/common/component/Animation";
import {
  metaTextStyle,
  successStyle,
} from "@/view/group/index/component/Withdraw/index.css";

const SuccessWithdraw = () => {
  return (
    <>
      <p className={metaTextStyle}>정상적으로 스터디에 탈퇴되었어요.</p>
      <div className={successStyle}>
        <Animation size="100px" animationJson={exitGroup} />
      </div>
    </>
  );
};

export default SuccessWithdraw;
