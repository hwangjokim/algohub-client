import { DataTable } from "@/shared/component/Table";
import { MEMBER_LIST_COLUMNS } from "@/view/group/setting/MemberList/constant";
import { useMemberListData } from "@/view/group/setting/MemberList/hook";

const MemberListTable = () => {
  const data = useMemberListData();
  return (
    <DataTable type={"스터디리스트"} cols={MEMBER_LIST_COLUMNS} rows={data} />
  );
};

export default MemberListTable;
