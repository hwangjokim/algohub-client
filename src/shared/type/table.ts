import type { Status } from "@/view/user/setting/type";
import type { ComponentProps, ReactNode } from "react";
import type TableHead from "../component/Table/TableElements/TableHead";

export type TableType = "스터디리스트" | "알림설정";

export type TableColumns<T> = {
  key: keyof T | string | undefined;
  Header: () => ReactNode;
  Cell: (data: T) => ReactNode;
  props?: ComponentProps<typeof TableHead>;
  justify?: "left" | "right";
  width: number;
  sort?: boolean;
  dropdownFilter?: boolean;
};

export type StudyListDataType = {
  pin: boolean;
  groupName: string;
  startDate: Date;
  endDate: Date;
  role: string;
  isPublic: boolean;
  status: Status;
};

export type AlarmSettingsDataType = {
  alarm: boolean;
  groupName: string;
  problemRegistration: boolean;
  solutionRegistration: boolean;
  commentRegistration: boolean;
  newMemberAllowed: boolean;
  endDateImminent: boolean;
};
