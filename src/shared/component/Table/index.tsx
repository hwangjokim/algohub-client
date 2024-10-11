"use client";
import type { PageType, TableColumns } from "@/shared/type/table";
import Body from "./Body";
import Header from "./Header";
import {
  tableCaptionStyle,
  tableStyle,
  wrapperStyle,
} from "./TableElements/index.css";

type DataTableProps<T> = {
  title: string;
  type: PageType;
  rows: T[];
  cols: TableColumns<T>[];
};

export const DataTable = <T,>({
  title,
  type,
  rows,
  cols,
}: DataTableProps<T>) => {
  // 정렬 필터 검색 페이징 헤더 셀width

  return (
    <div className={wrapperStyle}>
      <table className={tableStyle}>
        <caption className={tableCaptionStyle}>{title}</caption>
        <Header columns={cols} type={type} />
        <Body rows={rows} cols={cols} />
      </table>
    </div>
  );
};
