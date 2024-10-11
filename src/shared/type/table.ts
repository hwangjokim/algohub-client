import type { Status } from "@/view/user/setting/type";
import type { ComponentProps, ReactNode } from "react";
import type TableHead from "../component/Table/TableElements/TableHead";

export type PageType = "스터디관리" | "문제리스트" | "알림설정" | "내가푼문제";

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
