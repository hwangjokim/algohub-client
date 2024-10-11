import { DataTable, studyManaging } from "@/shared/component/Table";
import { testTableData } from "@/shared/constant/example";

const UserDashboardPage = () => {
  return (
    <div style={{ color: "white" }}>
      <DataTable
        title="스터디 리스트"
        rows={testTableData}
        cols={studyManaging}
      />
    </div>
  );
};

export default UserDashboardPage;
