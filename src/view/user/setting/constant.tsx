"use client";

import { IcnBtnPin, IcnBtnSort, IcnCalendarTable } from "@/asset/svg";
import ToggleButton from "@/common/component/ToggleButton";
import {
  tableCellTextStyle,
  withdrawTextStyle,
} from "@/shared/component/Table/TableElements/index.css";
import { pinStyle, sortIconStyle } from "@/shared/component/Table/index.css";
import type {
  AlarmSettingsDataType,
  StudyListDataType,
  TableDataType,
} from "@/shared/type/table";
import StatusDropdonwMenu from "./StatusDropdownMenu";
import StatusIcon from "./StatusIcon";

export const STUDY_LIST_COLUMNS: TableDataType<StudyListDataType>[] = [
  {
    key: "pin",
    Header: () => (
      <>
        <IcnBtnPin
          aria-label="즐겨찾기"
          width={20}
          height={20}
          className={pinStyle({ active: true })}
        />
        <IcnBtnSort className={sortIconStyle} width={20} height={20} />
      </>
    ),
    Cell: ({ pin }) => (
      <IcnBtnPin
        aria-label="이 스터디를 즐겨찾기 설정"
        width={20}
        height={20}
        className={pinStyle({ active: pin })}
      />
    ),
    width: 30,
    align: "left",
  },
  {
    key: "groupName",
    Header: () => "그룹명",
    Cell: (data) => data.groupName,
    width: 60,
    align: "left",
  },
  {
    key: "duration",
    Header: () => (
      <>
        <IcnCalendarTable width={20} height={20} />
        <span>기간</span>
        <IcnBtnSort className={sortIconStyle} width={20} height={20} />
      </>
    ),
    Cell: ({ startDate, endDate }) => {
      const startDateStr = startDate.toLocaleDateString().replaceAll(" ", "");
      const endDateStr = endDate.toLocaleDateString().replaceAll(" ", "");
      return (
        <>
          <time
            className={tableCellTextStyle.스터디리스트}
            dateTime={startDateStr}
          >
            {startDateStr}
          </time>{" "}
          ~{" "}
          <time
            className={tableCellTextStyle.스터디리스트}
            dateTime={endDateStr}
          >
            {endDateStr}
          </time>
        </>
      );
    },
    width: 60,
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
    Header: () => <StatusDropdonwMenu />,
    Cell: (data) => <StatusIcon status={data.status} />,
    width: 60,
  },
  {
    key: "withdraw",
    Header: () => "회원탈퇴",
    Cell: () => <button className={withdrawTextStyle}>회원 탈퇴</button>,
    width: 60,
    align: "right",
  },
];

export const ALARM_SETTINGS_COLUMNS: TableDataType<AlarmSettingsDataType>[] = [
  {
    key: "alertSetting",
    Header: () => "알림 설정",
    Cell: () => <ToggleButton isSelected onChange={() => {}} />,
    width: 80,
  },
  {
    key: "groupName",
    Header: () => "그룹명",
    Cell: (data) => data.groupName,
    width: 120,
  },
  {
    key: "issueRegistration",
    Header: () => "문제 등록",
    Cell: (data) => (data.problemRegistration ? "ON" : "OFF"),
    width: 100,
  },
  {
    key: "solutionRegistration",
    Header: () => "풀이 등록",
    Cell: (data) => (data.solutionRegistration ? "ON" : "OFF"),
    width: 100,
  },
  {
    key: "commentRegistration",
    Header: () => "코멘트 등록",
    Cell: (data) => (data.commentRegistration ? "ON" : "OFF"),
    width: 100,
  },
  {
    key: "newMember",
    Header: () => "신규 회원 가입",
    Cell: (data) => (data.newMemberAllowed ? "ON" : "OFF"),
    width: 100,
  },
  {
    key: "leave",
    Header: () => "마감 임박",
    Cell: (data) => (data.endDateImminent ? "ON" : "OFF"),
    width: 80,
  },
];
