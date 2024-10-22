"use client";
import { IcnBtnArrowDown, IcnReset } from "@/asset/svg";
import Dropdown from "@/common/component/Dropdown";
import Input from "@/common/component/Input";
import Menu from "@/common/component/Menu/Menu";
import {
  dividerStyle,
  dropdownWrapper,
  inputStyle,
  resetIconStyle,
  solvedFilterWrapper,
} from "@/shared/component/SolvedFilterBar/index.css";
import { SOLVED_RESULT } from "@/shared/constant/solvedResult";

const SolvedFilterBar = () => {
  return (
    <form className={solvedFilterWrapper}>
      <Input className={inputStyle} placeholder="문제 번호" />
      <Input className={inputStyle} placeholder="아이디" />
      <Menu
        label="language"
        renderTriggerButton={
          <div className={dropdownWrapper}>
            <span>모든 언어</span>
            <IcnBtnArrowDown width={20} height={20} />
          </div>
        }
        renderList={
          <Dropdown>
            {SOLVED_RESULT.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </Dropdown>
        }
      />
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
