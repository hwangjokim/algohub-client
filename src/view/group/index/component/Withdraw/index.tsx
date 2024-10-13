import Button from "@/common/component/Button";
import SuccessWithdraw from "@/view/group/index/component/Withdraw/SuccessWithdraw";
import PromptWithdraw from "@/view/group/index/component/Withdraw/\bPromptWithdraw";
import { withdrawWrapper } from "@/view/group/index/component/Withdraw/index.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Widthdraw = () => {
  const [click, setClick] = useState(false);
  const router = useRouter();

  const handleBtnClick = () => {
    if (click) router.push("/user");
    setClick(true);
  };

  return (
    <div className={withdrawWrapper}>
      {click ? <SuccessWithdraw /> : <PromptWithdraw />}
      <Button onClick={handleBtnClick}>{click ? "확인" : "나가기"}</Button>
    </div>
  );
};

export default Widthdraw;
