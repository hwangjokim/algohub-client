import { IcnReset } from "@/asset/svg";
import Input from "@/common/component/Input";
import {
  dividerStyle,
  inputStyle,
  resetIconStyle,
  solvedFilterWrapper,
} from "@/shared/component/SolvedFilterBar/index.css";

const SolvedFilterBar = () => {
  return (
    <form className={solvedFilterWrapper}>
      <Input className={inputStyle} placeholder="문제 번호" />
      <Input className={inputStyle} placeholder="아이디" />
      <div className={dividerStyle} />
      <IcnReset
        role="button"
        type="submit"
        className={resetIconStyle}
        width={44}
        height={44}
        aria-label="풀이 리스트 필터링"
      />
    </form>
  );
};

export default SolvedFilterBar;
