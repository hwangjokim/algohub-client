import { IcnBtnArrowLeft } from "@/asset/svg";
import SolvedFilterForm from "@/shared/component/SolvedFilterBar";
import ProblemInfo from "@/view/group/problem-list/SolvedList/ProblemInfo";
import SolvedTable from "@/view/group/problem-list/SolvedList/SolvedTable";
import {
  dividerStyle,
  headerContainer,
  headerTextStyle,
  solvedListWrapper,
} from "@/view/group/problem-list/SolvedList/index.css";

const SolvedList = () => {
  return (
    <div className={solvedListWrapper}>
      <div className={headerContainer}>
        <IcnBtnArrowLeft width={32} height={32} />
        <h1 className={headerTextStyle}>트리에서의 동적 계획법</h1>
      </div>
      <ProblemInfo />
      <SolvedFilterForm />
      <div className={dividerStyle} />
      <SolvedTable />
    </div>
  );
};

export default SolvedList;
