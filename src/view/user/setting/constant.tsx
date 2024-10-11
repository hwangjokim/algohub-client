"use client"

import { IcnBtnPin, IcnCalendarTable } from "@/asset/svg";
import { pinStyle } from "../../../shared/component/Table/index.css";
import type { StudyListDataType, TableColumns } from "../../../shared/type/table";

export const STUDY_MANAGING_COLUMNS: TableColumns<StudyListDataType>[] = [
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