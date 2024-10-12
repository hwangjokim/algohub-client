import { DataTable } from "@/shared/component/Table";
import { testTableData } from "@/shared/constant/example";
import { STUDY_MANAGING_COLUMNS } from "@/view/user/setting/constant";

const UserDashboardPage = () => {
  return (
    <DataTable
      title="스터디 리스트"
      type="스터디관리"
      rows={testTableData}
      cols={STUDY_MANAGING_COLUMNS}
    />
  );
};

export default UserDashboardPage;
