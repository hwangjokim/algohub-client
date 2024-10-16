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
  StudyListType,
  TableDataType,
} from "@/shared/type/table";
import StatusDropdonwMenu from "./StatusDropdownMenu";
import { textStyle } from "./StatusDropdownMenu/index.css";
import StatusIcon from "./StatusIcon";

export const STUDY_LIST_COLUMNS: TableDataType<StudyListType>[] = [
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
    Cell: ({ isBookmarked }) => (
      <IcnBtnPin
        aria-label="이 스터디를 즐겨찾기 설정"
        width={20}
        height={20}
        className={pinStyle({ active: isBookmarked })}
      />
    ),
    width: 30,
    align: "left",
  },
  {
    key: "groupName",
    Header: () => "그룹명",
    Cell: (data) => data.name,
    width: 100,
    align: "left",
  },
  {
    key: "duration",
    Header: () => (
      <>
        <IcnCalendarTable width={20} height={20} />
        <span className={textStyle}>기간</span>
        <IcnBtnSort className={sortIconStyle} width={20} height={20} />
      </>
    ),
    Cell: ({ startDate, endDate }) => {
      return (
        <>
          <time
            className={tableCellTextStyle.스터디리스트}
            dateTime={startDate}
          >
            {startDate}
          </time>{" "}
          ~{" "}
          <time className={tableCellTextStyle.스터디리스트} dateTime={endDate}>
            {endDate}
          </time>
        </>
      );
    },
    width: 120,
  },
  {
    key: "role",
    Header: () => "역할",
    Cell: (data) => (data.isOwner ? "스터디장" : "스터디 멤버"),
    width: 100,
  },
  {
    key: "isPublic",
    Header: () => "공개여부",
    Cell: (data) => (new Date(data.endDate) > new Date() ? "ON" : "OFF"),
    width: 100,
  },
  {
    key: "status",
    Header: () => <StatusDropdonwMenu />,
    Cell: (data) => <StatusIcon status={data.status} />,
    width: 100,
  },
  {
    key: "withdraw",
    Header: () => "회원탈퇴",
    Cell: () => <button className={withdrawTextStyle}>회원 탈퇴</button>,
    width: 70,
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
