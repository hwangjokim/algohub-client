"use client";

import { IcnBtnPin, IcnCalendarTable } from "@/asset/svg";
import type { StudyListDataType, TableColumns } from "@/shared/type/Table";
import Body from "./Body";
import Header from "./Header";
import Table from "./TableElements/Table";
import TableCaption from "./TableElements/TableCaption";
import { pinStyle } from "./index.css";

type DataTableProps<T> = {
  title: string;
  rows: T[];
  cols: TableColumns<T>[];
};

export const studyManaging: TableColumns<StudyListDataType>[] = [
  {
    key: "pin",
    Header: () => (
      <IcnBtnPin width={20} height={20} className={pinStyle.active} />
    ),
    Cell: ({ pin }) => (
      <IcnBtnPin
        width={20}
        height={20}
        className={pinStyle[pin ? "active" : "inActive"]}
      />
    ),
    width: 30,
    sort: true,
    justify: "left",
  },
  {
    key: "groupName",
    Header: () => "그룹명",
    Cell: (data) => <p>{data.groupName}</p>,
    width: 100,
    justify: "left",
  },
  {
    key: "duration",
    Header: () => (
      <>
        <IcnCalendarTable width={20} height={20} />
        기간
      </>
    ),
    Cell: ({ startDate, endDate }) => {
      const startDateStr = startDate.toLocaleDateString().replaceAll(" ", "");
      const endDateStr = endDate.toLocaleDateString().replaceAll(" ", "");
      return (
        <p>
          <time dateTime={startDateStr}>{startDateStr}</time> ~{" "}
          <time dateTime={endDateStr}>{endDateStr}</time>
        </p>
      );
    },
    width: 100,
    sort: true,
  },
  {
    key: "role",
    Header: () => "역할",
    Cell: (data) => <p>{data.role}</p>,
    width: 60,
  },
  {
    key: "isPublic",
    Header: () => "공개여부",
    Cell: (data) => <p>{data.isPublic ? "ON" : "OFF"}</p>,
    width: 60,
  },
  {
    key: "status",
    Header: () => "상태",
    Cell: (data) => <p>{data.status}</p>,
    width: 100,
    dropdownFilter: true,
  },
  {
    key: "withdraw",
    Header: () => "회원탈퇴",
    Cell: () => <p>회원 탈퇴</p>,
    width: 60,
    justify: "right",
  },
];

export const DataTable = <T,>({ title, rows, cols }: DataTableProps<T>) => {
  // 정렬 필터 검색 페이징 헤더 셀width

  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <Header columns={cols} type="스터디관리" />
      <Body rows={rows} cols={cols} />
    </Table>
  );
};
