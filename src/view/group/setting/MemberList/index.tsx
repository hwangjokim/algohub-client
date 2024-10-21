"use client";
import type { MemberResponse } from "@/api/group/type";
import { DataTable } from "@/shared/component/Table";
import {
  MemberListProvider,
  TableDataContext,
} from "@/view/group/setting/MemberList/MemberListProvider";
import { MEMBER_LIST_COLUMNS } from "@/view/group/setting/MemberList/MemberTable";
import {
  labelStyle,
  memberListWrapper,
} from "@/view/group/setting/MemberList/index.css";
import { useContext } from "react";

const MemberList = ({
  memberListData,
}: { memberListData: MemberResponse[] }) => {
  const data: MemberResponse[] =
    useContext(TableDataContext)?.processedData || [];

  return (
    <div className={memberListWrapper}>
      <h1 className={labelStyle}>멤버 리스트</h1>
      <MemberListProvider data={memberListData}>
        <DataTable
          type={"스터디리스트"}
          cols={MEMBER_LIST_COLUMNS}
          rows={data}
        />
      </MemberListProvider>
    </div>
  );
};

export default MemberList;
