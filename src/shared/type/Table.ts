import type { ComponentProps, ReactNode } from "react";
import type TableHead from "../component/Table/TableElements/TableHead";

export type PageType = "스터디관리" | "문제리스트" | "알림설정" | "내가푼문제";

export type TableColumns = {
  key: string; // keyof dataType
  headerName: ReactNode;
  props?: ComponentProps<typeof TableHead>;
  justify?: "left" | "right";
  width: number;
  sort?: boolean;
  dropdownFilter?: boolean;
};
