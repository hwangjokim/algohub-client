"use client";
import type { TableColumns, TableType } from "@/shared/type/table";
import Body from "./Body";
import Header from "./Header";
import {
  tableCaptionStyle,
  tableStyle,
  wrapperStyle,
} from "./TableElements/index.css";

type DataTableProps<T> = {
  title: string;
  type: TableType;
  rows: T[];
  cols: TableColumns<T>[];
};

export const DataTable = <T,>({
  title,
  type,
  rows,
  cols,
}: DataTableProps<T>) => {
  return (
    <div className={wrapperStyle}>
      <table className={tableStyle({ type })}>
        {title && <caption className={tableCaptionStyle}>{title}</caption>}
        <Header columns={cols} type={type} />
        <Body rows={rows} cols={cols} type={type} />
      </table>
    </div>
  );
};
