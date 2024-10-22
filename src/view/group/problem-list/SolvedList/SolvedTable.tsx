import Avatar from "@/common/component/Avatar";
import { tmpSolvedListData } from "@/shared/util/example";
import {
  tableRowStyle,
  tableStyle,
  tableWrapper,
  thTextStyle,
} from "@/view/group/problem-list/SolvedList/index.css";

const SolvedTable = () => {
  return (
    <div className={tableWrapper}>
      <table className={tableStyle}>
        <thead>
          <tr className={thTextStyle}>
            <th>아이디</th>
            <th>제출 일시</th>
            <th>메모리</th>
            <th>시간</th>
            <th>언어</th>
            <th>코드 길이</th>
            <th>결과</th>
          </tr>
        </thead>
        <tbody>
          {tmpSolvedListData.map((row) => (
            <tr key={row.solutionId} className={tableRowStyle}>
              <td>
                <Avatar src={row.profileImage} alt="회원 프로필" size="small" />
                {row.nickname}
              </td>
              <td>{row.solvedDateTime}</td>
              <td>{row.memoryUsage}KB</td>
              <td>{row.executionTime}ms</td>
              <td>{row.language}</td>
              <td>{row.codeLength}B</td>
              <td>{row.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SolvedTable;
