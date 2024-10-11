"use client";

import { IcnBtnPin, IcnCalendarTable } from "@/asset/svg";
import {
  tableCellTextStyle,
  withdrawTextStyle,
} from "@/shared/component/Table/TableElements/index.css";
import { pinStyle } from "@/shared/component/Table/index.css";
import type { StudyListDataType, TableColumns } from "@/shared/type/table";
import StatusIcon from "./component/StatusIcon";

export const STUDY_MANAGING_COLUMNS: TableColumns<StudyListDataType>[] = [
  {
    key: "pin",
    Header: () => (
      <IcnBtnPin
        width={20}
        height={20}
        className={pinStyle({ active: true })}
      />
    ),
    Cell: ({ pin }) => (
      <IcnBtnPin width={20} height={20} className={pinStyle({ active: pin })} />
    ),
    width: 30,
    sort: true,
    justify: "left",
  },
  {
    key: "groupName",
    Header: () => "그룹명",
    Cell: (data) => data.groupName,
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
        <>
          <time className={tableCellTextStyle} dateTime={startDateStr}>
            {startDateStr}
          </time>{" "}
          ~{" "}
          <time className={tableCellTextStyle} dateTime={endDateStr}>
            {endDateStr}
          </time>
        </>
      );
    },
    width: 100,
    sort: true,
  },
  {
    key: "role",
    Header: () => "역할",
    Cell: (data) => data.role,
    width: 60,
  },
  {
    key: "isPublic",
    Header: () => "공개여부",
    Cell: (data) => (data.isPublic ? "ON" : "OFF"),
    width: 60,
  },
  {
    key: "status",
    Header: () => "상태",
    Cell: (data) => <StatusIcon status={data.status} />,
    width: 60,
    dropdownFilter: true,
  },
  {
    key: "withdraw",
    Header: () => "회원탈퇴",
    Cell: () => <button className={withdrawTextStyle}>회원 탈퇴</button>,
    width: 60,
    justify: "right",
  },
];
